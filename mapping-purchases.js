var fs = require("fs");

// creating an array.
exports.newLineSplit = function(filepath) {

  var purchasesList = fs.readFileSync(filepath, "utf8");

  var newPurchasesList = purchasesList
    .split('\n')
    .splice(1)
    .filter(Boolean);

  // console.log(newPurchasesList);

      var accessArrayCommas = [];

        newPurchasesList.forEach(function(list){
          accessArrayCommas.push(list
            .replace(/,/g , '.')
          )
        })

        // console.log(accessArrayCommas);

          var arrayReplaceCommas = [];

            accessArrayCommas.forEach(function(list){
                arrayReplaceCommas.push(list
                  .replace(/;/g , ','))
            })

            // console.log(arrayReplaceCommas);

              var arrayWithIndexes = [];

              for (var i = 0; i < arrayReplaceCommas.length; i++) {
                arrayWithIndexes.push(arrayReplaceCommas[i] = arrayReplaceCommas[i]
                  .split(','));


                // arrayWithIndexes.push({
                //   date: arrayReplaceCommas[i][0] + '-2016',
                //   item: arrayReplaceCommas[i][1],
                //   quantity: Number(arrayReplaceCommas[i][2]),
                //   cost: Number(arrayReplaceCommas[i][3].replace(/R/ , ''))
                // })

            }

            // console.log(arrayWithIndexes);

            for (var i = arrayWithIndexes.length - 1; i >= 0; i--) {
                if (arrayWithIndexes[i][1] === "01-Mar") {
                  arrayWithIndexes.splice(i, 1);
                }
              }

              var week0Purchases = [];
              var week1Purchases = [];
              var week2Purchases = [];
              var week3Purchases = [];
              var week4Purchases = [];

                for (i = 0; i < arrayWithIndexes.length; i++) {
                    newdate = arrayWithIndexes[i][1];
                      var date = new Date(newdate);

                        if (date.getMonth() === 0) {
                          week0Purchases.push(arrayWithIndexes[i]);
                        }

                        if (date.getDate() < 8) {
                          week1Purchases.push(arrayWithIndexes[i]);
                        }

                        if (date.getDate() > 7 && date.getDate() < 15) {
                          week2Purchases.push(arrayWithIndexes[i]);
                        }

                        if (date.getDate() > 15 && date.getDate() < 22) {
                          week3Purchases.push(arrayWithIndexes[i]);
                        }

                        if (date.getDate() > 21 && date.getDate() < 28 && date.getMonth() === 1) {
                          week4Purchases.push(arrayWithIndexes[i]);
                        }
                    }

                        purchases = {
                        "week0": week0Purchases,
                        "week1": week1Purchases,
                        "week2": week2Purchases,
                        "week3": week3Purchases,
                        "week4": week4Purchases
                        };

                        // console.log(purchases)
                        return purchases;


            var purchasesMap = {};

            arrayWithIndexes.forEach(function(list){
              var item = list.item;
              var qty = list.quantity;
              var cost = list.cost;

              if(purchasesMap[item] === undefined){
                purchasesMap[item] = 0;
              }

              purchasesMap[item] += qty*cost;
            });

            // console.log(purchasesMap);
            return purchasesMap;

};

exports.weeklyPurchases = function(purchases, week) {
      // console.log(week);
          var purchasesList = [];

          purchases[week].forEach(function(array) {
          purchasesList.push([array[2], Number(array[4].replace(/R/,''))]);
          // Number(newList[i][3].replace(/R/, '')
            });
            // console.log(purchases[week]);

            // purchasesList.sort();
            // console.log(purchasesList);
            //
            var weeklyPurchases = {};

            purchasesList.forEach(function(array) {

              if (!weeklyPurchases.hasOwnProperty(array[0])) {
                weeklyPurchases[array[0]] = [array[1]];
              } else {
                weeklyPurchases[array[0]].push(array[1]);
              }
            });
            // console.log(weeklyPurchases);
            return weeklyPurchases;
};

exports.costPrices = function(weeklyPurchases) {

      var costPrices = {};

        for (var fruit in weeklyPurchases) {
          var total = 0;

          weeklyPurchases[fruit].forEach(function(price) {
            total += price;
          });

          var averageCost = Number((total / (weeklyPurchases[fruit].length)).toFixed(2));

          costPrices[fruit] = averageCost;
        }
        // console.log(costPrices);
        return costPrices;
}

exports.totalProfit = function(costPrices, sellingPrices, weeklySales) {
//  console.log(selling_prices);

    var profitMap = {};

      for (var product in sellingPrices) {
        for (var products in costPrices) {
          if (product === products) {
            profitMap[product] = (sellingPrices[product] - costPrices[products])
          }
        }
      }

      var totalProfit = {};

      for (var product in profitMap) {
        for (var products in weeklySales) {
          if (product === products) {
            totalProfit[product] = Number((weeklySales[products] * profitMap[product]).toFixed(2))
          }
        }
      }
      // console.log(totalProfit);
      return totalProfit;
}
