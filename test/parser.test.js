'use strict';

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const chai = require('chai');
const should = chai.should();
const path = require('path');
const os = require('os');

const HTMLParser = require('../lib/bookmark_parser/html_parser');
const JSONLZ4Parser = require('../lib/bookmark_parser/jsonlz4_parser');
const BMParser = require('../');

const htmlFilePath = path.resolve(__dirname, './file/bookmarks.html');
const jsonlz4FilePath = path.resolve(__dirname, './file/bookmarks.jsonlz4');

describe('Parser Unit Test', () => {
  it('should parse html file', () => {
    return HTMLParser(htmlFilePath)
      .then(res => {
        const data = res.Bookmarks.children[1].children[1].children;
        data.length.should.be.equal(4);
        data[0].name.should.be.equal('Nucleo');
      });
  });

  it('should parse jsonlz4 file', () => {
    return fs.readFileAsync(jsonlz4FilePath)
      .then(JSONLZ4Parser)
      .then(bmObject => bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children)
      .then(res => {
        res.length.should.be.equal(6);
        res[0].title.should.be.equal('Most Visited');
      });
  });
});

describe('Lib Test', () => {
  after('remove export file', () => {
    fs.unlinkSync('export.json');
  });

  it('should read from html file', () => {
    return BMParser.readFromHTMLFile(htmlFilePath)
      .then(res => {
        const data = res.Bookmarks.children[1].children[1].children;
        data.length.should.be.equal(4);
        data[0].name.should.be.equal('Nucleo');
      });
  });

  it('should read from html file and export', () => {
    return BMParser.readFromHTMLFile(htmlFilePath, './export.json')
      .then(() => fs.readFileAsync('export.json', 'UTF-8'))
      .then(res => {
        const data = JSON.parse(res).Bookmarks.children[1].children[1].children;
        data.length.should.be.equal(4);
        data[0].name.should.be.equal('Nucleo');
      });
  });

  it('should read from jsonlz4 file', () => {
    return BMParser.readFromJSONLZ4File(jsonlz4FilePath)
      .then(bmObject => bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children)
      .then(res => {
        res.length.should.be.equal(6);
        res[0].title.should.be.equal('Most Visited');
      });
  });

  it('should read from jsonlz4 file and export', () => {
    return BMParser.readFromJSONLZ4File(jsonlz4FilePath, './export.json')
      .then(() => fs.readFileAsync('export.json', 'UTF-8'))
      .then(JSON.parse)
      .then(bmObject => bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children)
      .then(res => {
        res.length.should.be.equal(6);
        res[0].title.should.be.equal('Most Visited');
      });
  });

  it('should find and read from jsonlz4 file on MacOS', () => {
    return BMParser.findFromLocalhost()
      .then(bmObject => {
        if (os.type() === 'Darwin') {
          const data = bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children;
          data.length.should.be.above(0);
        } else {
          return;
        }
      });
  });

  it('should find, read and export from jsonlz4 file on MacOS', () => {
    return BMParser.findFromLocalhost('./export.json')
      .then(() => fs.readFileAsync('export.json', 'UTF-8'))
      .then(JSON.parse)
      .then(bmObject => {
        if (os.type() === 'Darwin') {
          const data = bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children;
          data.length.should.be.above(0);
        } else {
          return;
        }
      });
  });
});

