var fs = require("fs");

// creating an array.
exports.mappedWeeks = function(filepath) {

  var list = fs.readFileSync(filepath, "utf8");

  var newList = list
    .split('\n')
    .splice(1)
    .filter(Boolean);


  var dataToArray = [];

  for (var i = 0; i < newList.length; i++) {
    newList[i] = newList[i]
      .split(',')
      .splice(1);


    dataToArray.push({

      date: newList[i][0] + '-2016',
      products: newList[i][1],
      sold: Number(newList[i][2]),
      price: Number(newList[i][3].replace(/R/, ''))

    })
}

  var productMap = {};

  dataToArray.forEach(function(list) {
    var item = list.products;
    var qty = list.sold;

    if (productMap[item] === undefined) {
      productMap[item] = 0;
      }

    productMap[item] += qty;
  });

  // console.log(productMap);
  return productMap;
};
