var http = require ('http');

var server = http.createServer(function(req,res){
    console.log('request was made' + req.url)
    res.writeHead(200,{'Content-type':'text/plain'});
    res.end('i m listening to the port : 3000');
});

server.listen(3000,'127.0.0.1');
console.log('i m listening to the port : 3000')
