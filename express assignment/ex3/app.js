var express = require('express');
var app = express();

var argument = process.argv.slice(2);
var port =argument[0]
console.log(port)

app.get('/home' ,function(req,res){
    res.send('Hello World!');
});
app.listen(port);