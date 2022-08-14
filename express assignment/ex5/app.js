var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var port = 3000;

app.set('view engine','ejs');

app.get('/form' ,function(req,res){
    res.render('form',{qs: req.query});
});

app.post('/form' , urlencodedParser,function(req,res){
    str = req.body.str.split("").reverse().join("");
    console.log(str);
    res.render('form-success' ,{str});
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});