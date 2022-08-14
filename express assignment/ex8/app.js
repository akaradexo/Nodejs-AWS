var express = require('express');
var app = express();
var templates = process.argv[3];
const path = require('path');

app.set('views', path.join(__dirname),templates)
app.set('view engine','pug');
var port = 3000;


app.get('/home' ,function(req,res){
    res.render('index',{date: new Date().toDateString()});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });