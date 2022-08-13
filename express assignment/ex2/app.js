var express = require('express');

var app = express();
const today = new Date();
const year = today.getFullYear();
const getBornYEar=(age)=>{
    return year-age
}
app.get('/year' ,function(req,res){
    var age = req.query.age;
    res.send('your age is '+ getBornYEar(age));
})
app.listen(3000);