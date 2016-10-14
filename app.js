var fs = require('fs');
var handlebars = require('handlebars');
var mappingTheWeeks = require('./mapping-the-weeks');
var processTheData = require('./process-the-data');
// var source = fs.readFileSync('./index.handlebars', 'utf8');

var inputWeek1 = fs.readFileSync('./data-files/week1.csv', 'utf8');

var weekOneSales = mappingTheWeeks.mappedWeeks(inputSale);
var mostPopProduct = processTheData.mostPopular(weekOneSales);
var leastPopular = processTheData.leastPopular(weekOneSales);

// var
//create a function that gets all my data
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
//
