var fs = require("fs");

// creating an array.
exports.newLineSplit = function(filepath) {

  var purchasesList = fs.readFileSync(filepath, "utf8");

  var newPurchasesList = purchasesList
    .split('\n')
    .splice(1)
    .filter(Boolean);

  console.log(newPurchasesList);

  var dataToArray = [];

  for (var i = 0; i < newPurchasesList.length; i++) {
      newPurchasesList[i] = newPurchasesList[i]
        .split(',')
        .splice(1);

        console.log(newPurchasesList[i][0]);

  //       dataToArray.push({
  // //
  //             shop: newPurchasesList[i][0],
  //             date: newPurchasesList[i][1] + '-2016',
  //             item: newPurchasesList[i][2],
  //             quantity: Number(newPurchasesList[i][3]),
  //             cost: Number(newPurchasesList[i][4].replace(/R/, '')),
  //             totalCost: Number(newPurchasesList[i][5].replace(/R/, ''))
  // //
  //           })
      }
      // console.log(dataToArray);

};

//   var productMap = {};
//
//   dataToArray.forEach(function(list) {
//     var item = list.products;
//     var quantity = list.sold;
//     var cost = list.cost;
//     var totalCost = list.totalCost;
//
//     if (productMap[item] === undefined) {
//       productMap[item] = 0;
//       }
//
//     productMap[item] += qty;
//   });
//
//   console.log(productMap);
//   return productMap;
// };
