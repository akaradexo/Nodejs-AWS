// #4 create a text file

var fs =  require('fs');

var text = process.argv.slice(2);

fs.writeFile('ex5.txt', text.toString(), (err)=> {
    if(err) console.log('error', err);
    console.log("The file is saved!");
});
