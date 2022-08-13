const directory = '.';
const path = require('path');
const fs = require('fs');

fs.readdir(directory, (err, files) => {
    if(err) console.log(err)
  files.forEach(file => {
    if (fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
      console.log('DIR: ' + file);
    } else {
      console.log('FILE: ' + file);
    }
  });
});