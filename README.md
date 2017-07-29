# Bookmark

[![Build Status](https://travis-ci.org/CCharlieLi/Bookmark.svg?branch=master)](https://travis-ci.org/CCharlieLi/Bookmark)

Find and parse Firefox/Chrome bookmark HTML and jsonlz4 file into useable JSON object or export as JSON file.

### Install

```
npm i bookmark-parser --save

yarn add bookmark-parser
```

### Usage

#### Interfaces

```
const BMParser = require('bookmark-parser');

// Read from (NETSCAPE/Firefox) bookmark HTML file
BMParser.readFromHTMLFile(htmlFilePath)
  .then(res => { ... });

// Read from (NETSCAPE/Firefox) bookmark HTML file and export
BMParser.readFromHTMLFile(htmlFilePath, exportFilePath)
  .then(res => { ... });


// Read from (NETSCAPE/Firefox) bookmark HTML readStream
BMParser.readFromHTMLReadStream(readStream)
  .then(res => { ... });

// Read from (NETSCAPE/Firefox) bookmark HTML readStream and export
BMParser.readFromHTMLReadStream(readStream, exportFilePath)
  .then(res => { ... });

// Read from (Firefox backup) bookmark jsonlz4 file
BMParser.readFromJSONLZ4File(jsonlz4FilePath)
  .then(res => { ... });

// Read from (Firefox backup) bookmark jsonlz4 file and export
BMParser.readFromJSONLZ4File(jsonlz4FilePath, exportFilePath)
  .then(res => { ... });

// Find Firefox bookmark backup file in your system
BMParser.findFromLocalhost().then(res => { ... });

// Find Firefox bookmark backup file in your system and export
BMParser.findFromLocalhost(exportFilePath).then(res => { ... });
```

#### Result of parsing HTML bookmark

```
{
  "Bookmarks": {
    "id": "1c6a31e159e649ccb267c332a6b69b3b",
    "prevNode": "[Circular ~]",
    "children": [
      {
        "addDate": "1496371119",
        "lastModified": "1496459142",
        "name": "Update Scanner's Pages",
        "type": "folder",
        "id": "1c6a31e159e649ccb267c332a6b69b3b-1",
        "prevNode": "[Circular ~.Bookmarks]",
        "children": [
          {
            "addDate": "1496374759",
            "lastModified": "1496459142",
            "name": "Update Scanner Website",
            "type": "bookmark",
            "url": "https://addons.mozilla.org/firefox/addon/update-scanner/",
            "id": "1c6a31e159e649ccb267c332a6b69b3b-1-1"
          }
        ]
      },
      {
        "addDate": "1496371160",
        "lastModified": "1496466717",
        "name": "Bookmarks Toolbar",
        "type": "folder",
        "id": "1c6a31e159e649ccb267c332a6b69b3b-2",
        "description": "添加到此文件夹的书签会被显示到书签工具栏中",
        "prevNode": "[Circular ~.Bookmarks]",
        "children": [
          {
            "addDate": "1496371179",
            "lastModified": "1496466729",
            "name": "IFC Markets",
            "type": "bookmark",
            "url": "https://private.ifcmarkets.com/zh_TW/accounts",
            "id": "1c6a31e159e649ccb267c332a6b69b3b-2-1",
            "description": "META_DESCRIPTION"
          },
          {
            "addDate": "1489373938",
            "lastModified": "1496456537",
            "name": "Front",
            "type": "folder",
            "id": "1c6a31e159e649ccb267c332a6b69b3b-2-2",
            "prevNode": "[Circular ~.Bookmarks.children.1]",
            "children": [
              {
                "addDate": "1489545113",
                "lastModified": "1489557898",
                "name": "Nucleo",
                "type": "bookmark",
                "url": "https://nucleoapp.com/",
                "id": "1c6a31e159e649ccb267c332a6b69b3b-2-2-1",
                "description": "A library of 1000+ vector icons and a web app to manage and customize them."
              },
              {
                "addDate": "1489545098",
                "lastModified": "1489557897",
                "name": "you-dont-need/You-Dont-Need-Javascript: Css is powerful, you can do a lot of things without js.",
                "type": "bookmark",
                "url": "https://github.com/you-dont-need/You-Dont-Need-Javascript",
                "id": "1c6a31e159e649ccb267c332a6b69b3b-2-2-2",
                "description": "You-Dont-Need-Javascript - Css is powerful, you can do a lot of things without js."
              },
              {
                "addDate": "1489490961",
                "lastModified": "1489557904",
                "name": "Markdown.css - make HTML look like plain-text",
                "type": "bookmark",
                "url": "http://mrcoles.com/demo/markdown-css/",
                "id": "1c6a31e159e649ccb267c332a6b69b3b-2-2-3"
              },
              {
                "addDate": "1489488225",
                "lastModified": "1489557893",
                "name": "gaearon/redux",
                "type": "bookmark",
                "url": "https://github.com/gaearon/redux",
                "id": "1c6a31e159e649ccb267c332a6b69b3b-2-2-4",
                "description": "redux - Atomic Flux with hot reloading"
              }
            ]
          }
        ]
      }
    ]
  }
}
```

### [Change log](https://github.com/CCharlieLi/Bookmark/blob/master/History.md)


### TODO

- [x] Parse Firefox jsonlz4 bookmark backup file
- [x] Parse Firefox/Chrome html bookmark file
- [x] Find and Parse Firefox jsonlz4 file on MacOS
- [x] Export bookmark into json file
- [ ] Option for deduplication
- [ ] Find and Parse Firefox jsonlz4 file on Windows/Linux
- [ ] Find and Parse Chrome bookmark backup file on Windows/Linux/MacOS

### License

Copyright 2017 ccharlieli@live.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
