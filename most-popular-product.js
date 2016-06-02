var fs = require("fs");

var list = fs.readFileSync("./data-files/week1.csv", "utf8");
var myDataToArray = list.split("\n").splice(1).filter(Boolean);

// var newData = [];
console.log(myDataToArray);
