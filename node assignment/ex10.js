var fs =  require('fs');

var fileName = process.argv.slice(2,3).toString();
console.log(fileName);
var text = process.argv.slice(3);
console.log(text)

fs.writeFile("cat/"+fileName, text.toString(), (err)=> {
    if(err) console.log('error', err);
    console.log("The file is saved!");
    fs.readFile("cat/"+fileName, 'utf8', function (err, data) {
        if(err) console.log('error', err);
        console.log(data);
    });
});
