
// const dateObj = new Date();
  
// console.log(`Date: ${dateObj.toDateString()}`);
// console.log(`Time: ${dateObj.toTimeString()}`);

var strftime = require('strftime')
var strftimeIT = strftime.localize('it_IT')
console.log(strftimeIT("time is : %H:%M:%S")) // => aprile 28, 2011 18:21:08