# Bookmark

[![Build Status](https://travis-ci.org/CCharlieLi/bookmark-parser.svg?branch=master)](https://travis-ci.org/CCharlieLi/bookmark-parser)

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
    "id": "c2c584eb4059443592d05c97a02d1627",
    "prevNode": "[Circular ~]",
    "children": [
      {
        "addDate": "1496371119",
        "lastModified": "1496459142",
        "name": "Update Scanner's Pages",
        "type": "folder",
        "id": "c2c584eb4059443592d05c97a02d1627-1",
        "prevNode": "[Circular ~.Bookmarks]",
        "children": [
          {
            "addDate": "1496374759",
            "lastModified": "1496459142",
            "name": "Update Scanner Website",
            "type": "bookmark",
            "url": "https://addons.mozilla.org/firefox/addon/update-scanner/",
            "id": "c2c584eb4059443592d05c97a02d1627-1-1"
          }
        ]
      },
      {
        "addDate": "1496371160",
        "lastModified": "1496466717",
        "name": "Bookmarks Toolbar",
        "type": "folder",
        "id": "c2c584eb4059443592d05c97a02d1627-2",
        "description": "添加到此文件夹的书签会被显示到书签工具栏中",
        "prevNode": "[Circular ~.Bookmarks]",
        "children": [
          {
            "addDate": "1496371179",
            "lastModified": "1496466729",
            "name": "Charlie's blog",
            "type": "bookmark",
            "url": "http://www.charlieli.cn/",
            "id": "c2c584eb4059443592d05c97a02d1627-2-1",
            "iconUri": "",
            "icon": "",
            "description": "META_DESCRIPTION"
          },
          {
            "addDate": "1489373938",
            "lastModified": "1496456537",
            "name": "Front",
            "type": "folder",
            "id": "c2c584eb4059443592d05c97a02d1627-2-2",
            "prevNode": "[Circular ~.Bookmarks.children.1]",
            "children": [
              {
                "addDate": "1489545113",
                "lastModified": "1489557898",
                "name": "Nucleo",
                "type": "bookmark",
                "url": "https://nucleoapp.com/",
                "id": "c2c584eb4059443592d05c97a02d1627-2-2-1",
                "iconUri": "https://nucleo1-ambercreativelab.netdna-ssl.com/wp-content/themes/nucleo-webapp-12/img/favicon.ico",
                "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB3klEQVRYhe3Xv27aUBQG8G9uBTZI/WOT7kkX7L4A5gEoNi+BmA2d4lgFx7FjbPw+IU8QsoYMSFiRKCytkif4OkDSdqhiEidupQzfes9POveeqwMArwD4ABIA358pCYDjTW34AJhTAgBY5Aj4BgDXOQJusOlJXoAfL4D/E1ASK1SqDWq1NrVam0q1wVKp8vQAQXhPQ+/zYP+MgTfnKFxyFC4ZeHPa1oSGPqAgSE8DkKRdds0TxtGK/tGMrnPJw8EFDwcXdJ1L+kczxtGKPXNMWd7LFlAovGHXPGE0XNwV/Vui4YI9c8xi8V12AL35lXG0urf4beJoRUPvZwMQRZkH+2f03FlqgOfOaFuTNBfzfoBSbfDYm9N1pqkBrjNl4M+pKs3HA7Ram6Nwmbr4XRvCJetaJxtAnCdAqX5+YAsSqmoGLRDFCm1r8sBLuJPNMzT0/tbPsKUPspsDxcJb9sxx+kHUPaUgZDiIAFCS9tgzx7+N4ukfPffc9Sj+0j2lLH9MU3w7AACKgsSW4dC2zhn4ya/PyE9oW+dsGQ5FUU5bfHvAbcqlHapKk3Wtw7rW4Se1yXL5w1ZnPAqQYV4A/wYgz8XkGsh3NVsA6wUxL0AIrFfkAMDVpifPkSsAQwCvfwKIVTuEZS4vqQAAAABJRU5ErkJggg==",
                "description": "A library of 1000+ vector icons and a web app to manage and customize them."
              },
              {
                "addDate": "1489545098",
                "lastModified": "1489557897",
                "name": "you-dont-need/You-Dont-Need-Javascript: Css is powerful, you can do a lot of things without js.",
                "type": "bookmark",
                "url": "https://github.com/you-dont-need/You-Dont-Need-Javascript",
                "id": "c2c584eb4059443592d05c97a02d1627-2-2-2",
                "iconUri": "https://assets-cdn.github.com/favicon.ico",
                "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADC0lEQVRYhb2Wv2tUQRDHv9Fwefdul535zp7GRrGz9RcoiEIK/wdBjBhFOwsVxMI/wMbSQrSyiWKwE0t/NHbRIoURJdqI2iRBBZVocxeez93L5XI68Jo3M/v5zuzOvgf0b9F7P2Uid8zsZTRb3tpu/9rabv+KZstm9tJE7njvpwDEdazb28qy3E1y2sgfXeBaj5E/SE6XZbl7YLCqBpI3jVzpF5wQskLypqqGdVcdyTeDgutPJN/03Q3n3ISRi8OCV7qx6Jyb6AkPIez9F/CqiBDC3hxcjXxbS5gz8v4gooxc7OTO1d6/DSHoXwKMvF1fRFWPd9xj3vupaPahOnYUeUyRx9WxjGYfOqM4BgCqejwh7nb90O1LVVGW5Z5qnKqGRqOxC8CmRBM3NRqNXfUTX5blnsza+6rVz2SC9vc8NH1YWZb7M1s0040ZN/JnKkhEJjcqQEQmMwJ+AhiHOnc2FdAm3wPgRgUAIMl3KYY6dxYkp1NO7/2pIcABAN77UykGyWnUx6TbnnVfnz1MVUNqm42cQzT7+pfDbGFY8K6Z2UKdE82+ItWaaDY/bAHR7HWKlRRg5NKwBRi5lBSQdQBbhsjfki00isxm7oATw6KLyInkVovMguStjPMFgNEh8EejyIvMGN6CtlrHUs5OwPWN0klez62vrdYxAPDR7EsuyMh7AMYHYG8z8l5u3Wj2BYAHAKjqjVVVqtecc0co8qQi4nubvMsQznS+YpsTwFHfbB5U584ZOWPk9xy8w7mxmqmq26PZtw5shSIXAIwZ+TzRkRkAIwkBIybyoBe0Uv03Vd3+R7aIXK0GNZvNA0VR7Kx/SFT1UK7nzrnD/QgQkaup/FGSzyqVPupq895PqeqVVqt1NNP+rrXXgpN8hh7TNV69MkXkfA9YymSN1r/GWge6KIod0Wx+NSnGpxrCJe/9SVW9DKAYREA0my+KYke/lZDkw8wVLesVQPIhBvi5GWEIp6PZx0EFRPITQziD9NT0bY4iF8zslZGf0fndztiYkZ/N7BVDuAjAbQT8X+w36KQvZccCoxkAAAAASUVORK5CYII=",
                "description": "You-Dont-Need-Javascript - Css is powerful, you can do a lot of things without js."
              },
              {
                "addDate": "1489490961",
                "lastModified": "1489557904",
                "name": "Markdown.css - make HTML look like plain-text",
                "type": "bookmark",
                "url": "http://mrcoles.com/demo/markdown-css/",
                "id": "c2c584eb4059443592d05c97a02d1627-2-2-3"
              },
              {
                "addDate": "1489488225",
                "lastModified": "1489557893",
                "name": "gaearon/redux",
                "type": "bookmark",
                "url": "https://github.com/gaearon/redux",
                "id": "c2c584eb4059443592d05c97a02d1627-2-2-4",
                "iconUri": "https://assets-cdn.github.com/favicon.ico",
                "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADC0lEQVRYhb2Wv2tUQRDHv9Fwefdul535zp7GRrGz9RcoiEIK/wdBjBhFOwsVxMI/wMbSQrSyiWKwE0t/NHbRIoURJdqI2iRBBZVocxeez93L5XI68Jo3M/v5zuzOvgf0b9F7P2Uid8zsZTRb3tpu/9rabv+KZstm9tJE7njvpwDEdazb28qy3E1y2sgfXeBaj5E/SE6XZbl7YLCqBpI3jVzpF5wQskLypqqGdVcdyTeDgutPJN/03Q3n3ISRi8OCV7qx6Jyb6AkPIez9F/CqiBDC3hxcjXxbS5gz8v4gooxc7OTO1d6/DSHoXwKMvF1fRFWPd9xj3vupaPahOnYUeUyRx9WxjGYfOqM4BgCqejwh7nb90O1LVVGW5Z5qnKqGRqOxC8CmRBM3NRqNXfUTX5blnsza+6rVz2SC9vc8NH1YWZb7M1s0040ZN/JnKkhEJjcqQEQmMwJ+AhiHOnc2FdAm3wPgRgUAIMl3KYY6dxYkp1NO7/2pIcABAN77UykGyWnUx6TbnnVfnz1MVUNqm42cQzT7+pfDbGFY8K6Z2UKdE82+ItWaaDY/bAHR7HWKlRRg5NKwBRi5lBSQdQBbhsjfki00isxm7oATw6KLyInkVovMguStjPMFgNEh8EejyIvMGN6CtlrHUs5OwPWN0klez62vrdYxAPDR7EsuyMh7AMYHYG8z8l5u3Wj2BYAHAKjqjVVVqtecc0co8qQi4nubvMsQznS+YpsTwFHfbB5U584ZOWPk9xy8w7mxmqmq26PZtw5shSIXAIwZ+TzRkRkAIwkBIybyoBe0Uv03Vd3+R7aIXK0GNZvNA0VR7Kx/SFT1UK7nzrnD/QgQkaup/FGSzyqVPupq895PqeqVVqt1NNP+rrXXgpN8hh7TNV69MkXkfA9YymSN1r/GWge6KIod0Wx+NSnGpxrCJe/9SVW9DKAYREA0my+KYke/lZDkw8wVLesVQPIhBvi5GWEIp6PZx0EFRPITQziD9NT0bY4iF8zslZGf0fndztiYkZ/N7BVDuAjAbQT8X+w36KQvZccCoxkAAAAASUVORK5CYII=",
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
