// most popular products.
exports.mostPopular = function(listMap) {

  var max = 0;
  var mostPopProduct = {};

  for (var key in listMap) {

    if (listMap[key] > max) {
      max = listMap[key];

      mostPopProduct = {
        item: key,
        qty: max
      };
    }
  }

  // console.log(mostPopProduct);
  return mostPopProduct;
};

exports.leastPopular = functtion(){


};
