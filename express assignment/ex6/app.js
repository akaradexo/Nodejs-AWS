
var express = require('express');
var app = express();

var port = 3000;

app.get('/' ,function(req,res){
    res.sendFile(__dirname + '/index.html');
});
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });