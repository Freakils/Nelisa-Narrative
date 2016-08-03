var fs = require("fs");

// creating an array.
exports.mappedPurchases = function(filepath) {

  var purchasesList = fs.readFileSync(filepath, "utf8");

  var newPurchasesList = purchasesList
    .split('\n')
    .splice(1)
    .filter(Boolean);

  console.log(newPurchasesList);
};

exports.arrayIndexes = function(){

  var dataToArray = [];

  for (var i = 0; i < newPurchasesList.length; i++) {
    newList[i] = newList[i]
      .split(',')
      .splice(1);


    dataToArray.push({

      shop: newList[0],
      date: newList[i][1] + '-2016',
      item: newList[i][2],
      quantity: Number(newList[i][3]),
      cost: Number(newList[i][4].replace(/R/, '')),
      totalCost: Number(newList[i][5].replace(/R/, ''))

    })
}
};
//
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
