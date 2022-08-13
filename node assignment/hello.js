var fileName = process.argv.slice(1,2).toString();

var name1 = process.argv.slice(2,3).toString();
var greet = process.argv.slice(3,4).toString();
var name2 = process.argv.slice(4,5).toString();


name1 ="Arnav"
name2 = name1

console.log(`node ${fileName} ${name1} ${greet} ${name2}`)

