// #2 
// Read a file
var fs = require('fs');
var fileName = process.argv.slice(2);

// // syschronous

var readMe= fs.readFileSync(fileName.toString(),'utf8');
console.log(readMe);

//write a file
// fs.writeFileSync('writeMe.txt',readMe);

// asyschronous
// Read a file
// fs.readFile('readMe.txt', 'utf8', function (err, data) {
//     fs.writeFile('writeMe.txt', data, function(err, result) {
//        if(err) console.log('error', err);
//      });
//    });
// console.log(readMe);



