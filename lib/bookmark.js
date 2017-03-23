'use strict';

const Promise = require('bluebird');
const os = require('os');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const parser = require('./parser');

class Bookmark {
  constructor() {

  }

  findFirefoxBookmark() {
    let filePath;
    switch (os.type()) {
      case 'Darwin':
        filePath = `${os.homedir()}/Library/Application Support/Firefox/Profiles`;
        return fs.readdirAsync(filePath)
          .then(dirs => dirs.filter(each => each.split('.')[1] === 'default'))
          .then(dir => filePath = path.join(filePath, dir[0], 'bookmarkbackups'))
          .then(dir => fs.readdirAsync(dir))
          .then(files => files.sort().reverse()[0])
          .then(file => fs.readFileAsync(path.join(filePath, file)))
          .then(parser)
          .then(bmObject => bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children)
          .then(res => {
            console.log(res);
            return res;
          })
          .then(tbObject => tbObject.filter(each => each.title !== 'Most Visited'))

          .then(tbObject => tbObject.map((each) => {
            delete each.guid;
            delete each.dateAdded;
            delete each.lastModified;
            delete each.id;
            return each;
          }));
        break;
      case 'Windows_NT':
        filePath = path.join(os.homedir(), 'AppData', 'Roaming', 'Mozilla', 'Firefox');
        break;
      case 'Linux':
        filePath = path.join(os.homedir(), '.mozilla', 'firefox');
        break;
    }
  }
}

module.exports = Bookmark;
