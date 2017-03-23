# Bookmark

[![Build Status](https://travis-ci.org/CCharlieLi/Bookmark.svg?branch=master)](https://travis-ci.org/CCharlieLi/Bookmark)

Find and parse your browser's bookmark.

### Install

```
npm i bookmark-parser --save
```

### Usage

```
const BM = require('bookmark-parser');
const bm = new BM();
return bm.findFirefoxBookmark().then(console.log);
```

### License

MIT