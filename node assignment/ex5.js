var fs = require('fs');
var text = process.argv.slice(2);
fs.readFile('readMe.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  else{
    const dataArr = data.split(" ");
    console.log(dataArr)
    console.log(dataArr.filter(e => e === "john").length)
  }
});
