var fs = require('fs');
var handlebars = require('handlebars');
var mappingTheWeeks = require('./mapping-the-weeks');
var processTheData = require('./process-the-data');
var mappingPurchases = require('./mapping-purchases');

// var filepath = fs.readFileSync(path, 'utf8');


var weekOne = mappingTheWeeks.mappedWeeks('./data-files/week1.csv');
// console.log(weekOne);
  var mostPopular = processTheData.mostPopular(weekOne);
  var leastPopular = processTheData.leastPopular(weekOne);

  var popularCategory = processTheData.popularCategory(weekOne);
  var leastCategory = processTheData.leastCategory(weekOne);


  var purchases = mappingPurchases.newLineSplit('./data-files/purchases.csv');
    // console.log(purchases);
    var weeklyPurchases = mappingPurchases.weeklyPurchases(purchases, 'week4');
    var costPrices = mappingPurchases.costPrices(weeklyPurchases);
    var totalProfit = mappingPurchases.totalProfit(costPrices, sellingPrices, weeklySales);
    console.log(totalProfit);



  
