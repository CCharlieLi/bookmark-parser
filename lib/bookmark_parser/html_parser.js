'use strict';

const Promise = require('bluebird');
const lineReader = require('line-reader');
const eachLine = Promise.promisify(lineReader.eachLine);
const xml2json = require('xml2json');
const uuid = require('uuid/v4');

module.exports = (fileStream) => {
  let bookmarks = {};
  let currentNode = bookmarks;
  let latestNode = bookmarks;
  let idQueue = [];
  let subId = uuid().replace(/-/g, '');

  // TODO progress bar
  return eachLine(fileStream, (line) => {
    // filter useless content
    line = line.replace(/(<DT>.+)/g, '$1</DT>')
      .replace(/(<!DOCTYPE.+)/g, '')
      .replace(/(<META.+)/g, '')
      .replace(/<p>/g, '')
      .replace(/<HR>/g, '');

    let str;

    if (line.match(/^<TITLE>(.+)<\/TITLE>$/)) {
      str = line.match(/^<TITLE>(.+)<\/TITLE>$/);
      latestNode = currentNode[str[1]] = {};
      latestNode.id = subId;
    }

    if (/<DL>/.test(line)) {
      const prevNode = currentNode;
      currentNode = latestNode;
      currentNode.prevNode = prevNode;
      currentNode.children = [];
      idQueue.push(subId);
      subId = 0;
    }

    if (/<\/DL>/.test(line)) {
      currentNode = currentNode.prevNode;
      subId = parseInt(idQueue[idQueue.length - 1], 10);
      idQueue.pop();
    }

    if (line.match(/<DT>(<H3.+<\/H3>)<\/DT>/)) {
      str = line.match(/<DT>(<H3.+<\/H3>)<\/DT>/);
      const tmp = JSON.parse(xml2json.toJson(str[1]));
      currentNode.children.push({
        addDate: tmp['H3']['ADD_DATE'],
        lastModified: tmp['H3']['LAST_MODIFIED'],
        name: tmp['H3']['$t'],
        type: 'folder',
        id: `${idQueue.join('-')}-${++subId}`
      });
      latestNode = currentNode.children[currentNode.children.length - 1];
    }

    if (line.match(/<DT>(<A.+<\/A>)<\/DT>/)) {
      str = line.match(/<DT>(<A.+<\/A>)<\/DT>/);
      const tmp = JSON.parse(xml2json.toJson(str[1].replace(/&/g, '%26')));
      currentNode.children.push({
        addDate: tmp['A']['ADD_DATE'],
        lastModified: tmp['A']['LAST_MODIFIED'],
        name: tmp['A']['$t'],
        type: 'bookmark',
        url: tmp['A']['HREF'],
        id: `${idQueue.join('-')}-${++subId}`,
        iconUri: tmp['A']['ICON_URI'],
        icon: tmp['A']['ICON']
      });
      latestNode = currentNode.children[currentNode.children.length - 1];
    }

    if (line.match(/<DD>(.+)/)) {
      str = line.match(/<DD>(.+)/);
      latestNode.description = str[1];
    }
  }).then((err) => {
    if (err) throw err;
    return bookmarks;
  });
};
