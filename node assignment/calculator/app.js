var calculator = require('./calculator');
var addition = require('./operations/addition');
var division = require('./operations/division');

var substration = require('./operations/substraciton');

var multiplication = require('./operations/multiplication');


var moment = require('moment');

console.log(`Today is :${moment().format('dddd')} , ${moment().format('MMMM Do YYYY, h:mm:ss a')} ${calculator.sum(6,7)} ${calculator.multi(6,7)}`)
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(calculator.sum(6,7))
console.log(calculator.multi(6,7))
console.log(addition.addition(6,7))
console.log(division.division(6,7))
console.log(substration.substration(6,7))
console.log(multiplication.multi(6,7))