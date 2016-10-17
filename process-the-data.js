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

// least popular products.
exports.leastPopular = function(listMap) {

  var min = Infinity;
    var leastPopProduct = {};

    for (var key in listMap) {
      if (listMap[key] < min) {
        min = listMap[key];

        leastPopProduct = {
          item: key,
          qty: min
        };
      }
    }
    return leastPopProduct;
};

// Most profitable product.
exports.mostProfitableProduct = function(totalProfit) {
  var profit = [];

  for (var product in totalProfit) {
    profit.push(totalProfit[product]);
  }

  var mostProfit = Math.max.apply(null, profit);
  //console.log(mostProfit);
  for (product in totalProfit) {
    if (totalProfit[product] === mostProfit) {
      var mostProfitableProduct = {
        description: "Most Profitable Product",
        product: product,
        profit: mostProfit
      };
    }
  }
  // console.log(mostProfitableProduct);
  return mostProfitableProduct;
}


// most popular category.
var productsCategories = {
  'Milk 1l': 'Dairy',
  'Imasi': 'Dairy',
  'Bread': 'Bakery',
  'Chakalaka Can': 'Canned Foods',
  'Gold Dish Vegetable Curry Can': 'Canned Foods',
  'Fanta 500ml': 'Soft Drinks',
  'Coke 500ml': 'Soft Drinks',
  'Cream Soda 500ml': 'Soft Drinks',
  'Iwisa Pap 5kg': 'Starch',
  'Top Class Soy Mince': 'Meat',
  'Shampoo 1 litre': 'Hygiene',
  'Soap Bar': 'Hygiene',
  'Bananas - loose': 'Fruits',
  'Apples - loose': 'Fruits',
  'Mixed Sweets 5s': 'Sweets',
  'Rose (plastic)': 'Extras',
  'Valentine Cards': 'Extras'
};

exports.popularCategory = function(listMap) {

  var mappedCat = {};

    for (var item in listMap) {
      var category = productsCategories[item];

      if (mappedCat[category] === undefined) {
        mappedCat[category] = 0;
      }

      var qty = listMap[item];
      mappedCat[category] = mappedCat[category] + qty;
    }
    // console.log(mappedCat);

    var mostPopularCategory = {};
    var max = 0;

    for (var category in mappedCat) {
      var number = mappedCat[category];

      if (mappedCat[category] > max) {
        max = mappedCat[category];

        mostPopularCategory = {
          category: category,
          qty: max
        }
      }
    }
    return mostPopularCategory;
};

// Least popular category.
exports.leastCategory = function(listMap) {

  var mappedCat = {};

    for (var item in listMap) {
      var category = productsCategories[item];

      if (mappedCat[category] === undefined) {
        mappedCat[category] = 0;
      }

      var qty = listMap[item];
      mappedCat[category] = mappedCat[category] + qty;
    }
    // console.log(mappedCat);

    var leastPopularCategory = {};
    var min = Infinity;

    for (var category in mappedCat) {
      var number = mappedCat[category];

      if (mappedCat[category] < min) {
        min = mappedCat[category];

        leastPopularCategory = {
          category: category,
          qty: min
        }
      }
    }
    return leastPopularCategory;
};

// Most profitable category.
exports.mostProfitableCategory = function(listMap){
  var mappedProfitCat = {};

    for (var item in listMap){
      var category = productsCategories[item];

      if(mappedProfitCat[category] === undefined){
        mappedProfitCat[category] = 0;
      }
      var catProfit = listMap[item];
      mappedProfitCat[category] = mappedProfitCat[category] + catProfit;
    }
    console.log(mappedProfitCat);

    var mostProfitableCategory = {};
    var max = 0;

    for(var cat in mappedProfitCat){
      var value = mappedProfitCat[cat];
      if(mappedProfitCat[cat] > max){
        max = mappedProfitCat[cat];
        mostProfitableCategory = {
          description: 'Most Profitable Category',
          category: cat,
          profitValue: max
        }
      }
    }
    console.log(mostProfitableCategory);
    return mostProfitableCategory;
}
