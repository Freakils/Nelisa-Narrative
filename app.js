var fs = require('fs');
var handlebars = require('handlebars');
var mappingTheWeeks = require('./mapping-the-weeks');
var processTheData = require('./process-the-data');
// var source = fs.readFileSync('./index.handlebars', 'utf8');

// var filepath = fs.readFileSync(path, 'utf8');


var weekOne = mappingTheWeeks.mappedWeeks('./data-files/week1.csv');
// console.log(weekOne);
var mostPopular = processTheData.mostPopular(weekOne);

var leastPopular = processTheData.leastPopular(weekOne);
console.log(leastPopular);
