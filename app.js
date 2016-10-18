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
    var weekFour = mappingTheWeeks.mappedWeeks('./data-files/week4.csv');
    // console.log(purchases);
    var weeklyPurchases = mappingPurchases.weeklyPurchases(purchases, 'weekFour');
    console.log(weeklyPurchases);



// //create a function that gets all my data
//  exports.weeklyStats = function(week){
//    //get the data
//   var inputSales = products.getSalesList('./files/' + week +'.csv');
//
//   var weeklySales = products.getWeeklySales(inputSales);
//   var mostPopularProduct = products.getMostPopularProduct(weeklySales);
//   var leastPopularProduct = products.getLeastPopularProduct(weeklySales);
//
//   var inputCategories = products.getCategories('./files/categories.csv')
//   var catSales = products.getCatSales(inputCategories, weeklySales);
//   var mostPopularCategory = products.getMostPopularCategory(catSales);
//   var leastPopularCategory = products.getLeastPopularCategory(catSales);
//
//   var purchases = products.getPurchases('./files/purchases.csv');
//
//   var weeklyPurchases = products.getWeeklyPurchases(purchases, week);
//   var costPrices = products.getCostPrices(weeklyPurchases);
//   var totalProfit = products.getTotalProfit(costPrices, sellingPrices, weeklySales);
//   var mostProfitableProduct = products.getMostProfitableProduct(totalProfit);
//   var catProfit = products.getCatProfit(categories ,totalProfit);
//   var mostProfitableCategory = products.getMostProfitableCategory(catProfit);
//
//   //introducing my handlebar template
//   var source = fs.readFileSync('./index.handlebars', 'utf8');
//   //create the template
//   var template = handlebars.compile(source);
//   //combine the source and the template
//   var results = template({
//     listOfProducts: [mostPopularProduct, leastPopularProduct, leastPopularCategory, mostPopularCategory],
//     listOfProfitable: [mostProfitableProduct, mostProfitableCategory]
//   });
//   //console.log(results);
//    return results;
// };
// //
// var week = process.argv[2];
// //weeklyStats(week);
//
// //write your js file in the HTML.
// //  fs.writeFileSync(weeklyStats + 'week');
