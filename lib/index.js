'use strict';

const Promise = require('bluebird');
const os = require('os');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');
const stringify = require('json-stringify-safe');

const JSONLZ4Parser = require(path.resolve(__dirname, './bookmark_parser/jsonlz4_parser'));
const HTMLParser = require(path.resolve(__dirname, './bookmark_parser/html_parser'));

module.exports.readFromHTMLFile = (source, dest) => {
  return HTMLParser(source).then(bookmarks => {
    if (!dest || typeof dest !== 'string') return bookmarks;
    // TODO check if dest is existent or a directory
    return fs.writeFileAsync(dest, stringify(bookmarks));
  });
};

module.exports.readFromJSONLZ4File = (source, dest) => {
  return fs.readFileAsync(source)
    .then(JSONLZ4Parser)
    .then(bookmarks => {
      if (!dest || typeof dest !== 'string') return bookmarks;
      // TODO check if dest is existent or a directory
      return fs.writeFileAsync(dest, stringify(bookmarks));
    });
};

module.exports.findFromLocalhost = (dest, version = 'default') => {
  let filePath;
  switch (os.type()) {
    case 'Darwin':
      filePath = `${os.homedir()}/Library/Application Support/Firefox/Profiles`;
      return fs.readdirAsync(filePath)
        .then(dirs => dirs.filter(each => each.split('.')[1] === version))
        .then(dir => filePath = path.join(filePath, dir[0], 'bookmarkbackups'))
        .then(dir => fs.readdirAsync(dir))
        .then(files => files.sort().reverse()[0])
        .then(file => fs.readFileAsync(path.join(filePath, file)))
        .then(JSONLZ4Parser)
        .then(bookmarks => {
          if (!dest || typeof dest !== 'string') return bookmarks;
          // TODO check if dest is existent or a directory
          return fs.writeFileAsync(dest, stringify(bookmarks));
        })
        .catch(err => {
          throw err;
        });
      break;
    case 'Windows_NT':
      filePath = path.join(os.homedir(), 'AppData', 'Roaming', 'Mozilla', 'Firefox');
      // TODO
      return;
      break;
    case 'Linux':
      filePath = path.join(os.homedir(), '.mozilla', 'firefox');
      // TODO
      return;
      break;
  }
};
