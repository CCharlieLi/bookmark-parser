'use strict';

const chai = require('chai');
const should = chai.should();
const parser = require('../lib/parser');
const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));

describe('Parser Test', () => {
  it('should return error with wrong schema', () => {
    return fs.readFileAsync('test/file/bookmarks-2017-03-22.jsonlz4')
      .then(parser)
      .then(bmObject => bmObject.children.filter(each => each.title === 'Bookmarks Toolbar')[0].children)
      .then(res => {
        res.length.should.be.equal(6);
        res[0].title.should.be.equal('Most Visited');
      })
  });
});
