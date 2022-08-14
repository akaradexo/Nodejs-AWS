var express = require('express');
var fs = require('fs');
var app = express();

var fileName = process.argv[2];
console.log(fileName)
var  PORT = process.env.PORT || 3000;


app.get('/books' ,function(req,res){
    fs.readFile(fileName,function(err,data){
        var string = data;
        var object = JSON.parse(string);
        res.json(object);
    })
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });