'use strict;'

import os from 'os';

class Bookmark {
  constructor() {
    
  }

  findFirefoxBookmark() {
    let home = os.homedir();
    switch(os.type()) {
      case 'Darwin':
        home += '/Library/Application Support/Firefox/Profiles';
        break;
      case 'Windows_NT':
        break;
      case 'Linux':
        break;
    }

    if ( === ) {
      dir = `${}`
    } else if (os.type() === '') {
      dir = path.join(os.homedir(), 'AppData', 'Roaming', 'Mozilla', 'Firefox')
    } else if (os.type() === '') {
      dir = path.join(os.homedir(), '.mozilla', 'firefox')
    }
  }
}
