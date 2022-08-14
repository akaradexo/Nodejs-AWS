var express = require('express');
var app = express();
var  PORT = process.env.PORT || 8080;

var dateTime = new Date();
console.log(dateTime);

app.get('/' ,function(req,res){
    res.send('Hello World!');
});
app.get('/time' ,function(req,res){
    res.send(dateTime);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });