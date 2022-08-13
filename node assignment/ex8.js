var fs = require('fs');

var readMe= fs.readFile("num.txt",'utf8' ,function(err,data){
    if(err) console.log('error', err);
    var numArr = data.split(" ")
    console.log(numArr)
    var sum =  0
    numArr.forEach(x =>{
        var y = parseInt(x)
        console.log(y)
        sum+=y;
    })
    console.log(sum) ;
});
console.log(readMe);