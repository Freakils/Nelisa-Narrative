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

exports.leastPopular = function(listMap){

  var min = Infinity;
  var leastPopProduct = {};

  for (var key in listMap){
    if(listMap[key] < min){
      min = listMap[key];

      leastPopProduct = {
        item: key,
        qty: min
      };
    }
  }
  return leastPopProduct;
};

// most popular category.
exports.populaCategory = function(){}
