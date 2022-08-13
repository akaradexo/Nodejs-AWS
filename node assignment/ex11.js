var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname +'/ipsum.txt','utf8');

myReadStream.on('data',function(chunk){
    console.log('new chunck received:');
    console.log(chunk);
})