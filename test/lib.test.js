const Bookmark = require('../lib/bookmark');
const bm = new Bookmark();
return bm.findFirefoxBookmark().then(console.log);