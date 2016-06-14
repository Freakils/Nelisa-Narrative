var fs = require("fs");
exports.csv = function(filepath) {
  var list = fs.readFileSync(filepath, "utf8");
  var newList = list.split('\n').splice(1).filter(Boolean);

  var dataToArray = newList.map(function(ls) {

    var indexOne = ls.split(',')[0];
    var indexTwo = ls.split(',')[1];
    var indexThree = ls.split(',')[2];
    var indexFour = Number(ls.split(',')[3]);
    var indexFive = ls.split(',')[4];
    return {
      day: indexOne,
      date: indexTwo,
      products: indexThree,
      sold: indexFour,
      price: indexFive
    };

  });
  // console.log(dataToArray);
  return dataToArray;
};

exports.mostPopular = function(dataToArray) {

  var min = 0;
  var mostProduct = "";

  dataToArray.forEach(function(user) {
    if (user.sold > min) {
      min = user.sold;
      mostProduct = user.products;
      //most = user.pPrice;
    }
  })
 // console.log(mostProduct);
  return mostProduct;
};

exports.leastPopular = function(dataToArray) {
  var max = Infinity;
  var leastProduct = "";

  dataToArray.forEach(function(user) {
    if (user.sold < max) {
      max = user.sold;
      leastProduct = user.products;
    }
  })
  return leastProduct;
  console.log(leastProduct);

};
