var fs = require('fs');
var concat = require('concat-stream');
var concatStream = concat(gotText);
var readStream = fs.createReadStream(__dirname+'/readMe.txt','utf-8');

readStream.on('error', handleError)
readStream.pipe(concatStream)

function gotText(text){
    var arrStr= text.split(" ");
    console.log(arrStr)
}
function handleError(err) {
    console.error(err) 
  }