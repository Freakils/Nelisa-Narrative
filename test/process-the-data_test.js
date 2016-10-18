var assert = require("assert");
var mappingTheWeeks = require("../mapping-the-weeks");
var processTheData = require("../process-the-data");
var mappingPurchases = require("../mapping-purchases");


// My maps.
describe("mapped products each week", function() {

  it("return mapped products each week", function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    var weekTwo = {
      'Imasi': 36,
      'Bread': 28,
      'Chakalaka Can': 21,
      'Gold Dish Vegetable Curry Can': 27,
      'Fanta 500ml': 23,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 10,
      'Top Class Soy Mince': 21,
      'Shampoo 1 litre': 6,
      'Soap Bar': 5,
      'Bananas - loose': 28,
      'Apples - loose': 21,
      'Mixed Sweets 5s': 54,
      'Milk 1l': 28,
      'Heart Chocolates': 20,
      'Rose (plastic)': 14,
      'Valentine Cards': 14
    };

    var weekThree = {
      'Imasi': 25,
      'Bread': 24,
      'Chakalaka Can': 17,
      'Gold Dish Vegetable Curry Can': 8,
      'Fanta 500ml': 14,
      'Coke 500ml': 18,
      'Cream Soda 500ml': 12,
      'Iwisa Pap 5kg': 4,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 4,
      'Soap Bar': 8,
      'Bananas - loose': 17,
      'Apples - loose': 25,
      'Mixed Sweets 5s': 29,
      'Milk 1l': 28
    };

    var weekFour = {
      'Imasi': 34,
      'Bread': 33,
      'Chakalaka Can': 33,
      'Gold Dish Vegetable Curry Can': 34,
      'Fanta 500ml': 24,
      'Coke 500ml': 45,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 16,
      'Top Class Soy Mince': 43,
      'Shampoo 1 litre': 13,
      'Soap Bar': 25,
      'Bananas - loose': 22,
      'Apples - loose': 32,
      'Mixed Sweets 5s': 40,
      'Milk 1l': 43
    };

    assert.deepEqual(weekOne, mappingTheWeeks.mappedWeeks("./data-files/week1.csv"));
    assert.deepEqual(weekTwo, mappingTheWeeks.mappedWeeks("./data-files/week2.csv"));
    assert.deepEqual(weekThree, mappingTheWeeks.mappedWeeks("./data-files/week3.csv"));
    assert.deepEqual(weekFour, mappingTheWeeks.mappedWeeks("./data-files/week4.csv"));
  })
});

// most popular products.
describe("most popular product each week", function() {

  it("should return the most popular products in week1", function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    var popularWk1 = {
      item: 'Coke 500ml',
      qty: 54
    };

    assert.deepEqual(processTheData.mostPopular(weekOne), popularWk1);
  })

  it("should return the most popular products in week2", function() {

    var weekTwo = {
      'Imasi': 36,
      'Bread': 28,
      'Chakalaka Can': 21,
      'Gold Dish Vegetable Curry Can': 27,
      'Fanta 500ml': 23,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 10,
      'Top Class Soy Mince': 21,
      'Shampoo 1 litre': 6,
      'Soap Bar': 5,
      'Bananas - loose': 28,
      'Apples - loose': 21,
      'Mixed Sweets 5s': 54,
      'Milk 1l': 28,
      'Heart Chocolates': 20,
      'Rose (plastic)': 14,
      'Valentine Cards': 14
    };

    var popularWk2 = {
      item: 'Mixed Sweets 5s',
      qty: 54
    };

    assert.deepEqual(processTheData.mostPopular(weekTwo), popularWk2)
  })

  it("should return the most popular products in week3", function() {

    var weekThree = {
      'Imasi': 25,
      'Bread': 24,
      'Chakalaka Can': 17,
      'Gold Dish Vegetable Curry Can': 8,
      'Fanta 500ml': 14,
      'Coke 500ml': 18,
      'Cream Soda 500ml': 12,
      'Iwisa Pap 5kg': 4,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 4,
      'Soap Bar': 8,
      'Bananas - loose': 17,
      'Apples - loose': 25,
      'Mixed Sweets 5s': 29,
      'Milk 1l': 28
    };

    var popularWk3 = {
      item: 'Mixed Sweets 5s',
      qty: 29
    };

    assert.deepEqual(processTheData.mostPopular(weekThree), popularWk3)
  })

  it("should return the most popular products in week4", function() {

    var weekFour = {
      'Imasi': 34,
      'Bread': 33,
      'Chakalaka Can': 33,
      'Gold Dish Vegetable Curry Can': 34,
      'Fanta 500ml': 24,
      'Coke 500ml': 45,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 16,
      'Top Class Soy Mince': 43,
      'Shampoo 1 litre': 13,
      'Soap Bar': 25,
      'Bananas - loose': 22,
      'Apples - loose': 32,
      'Mixed Sweets 5s': 40,
      'Milk 1l': 43
    };

    var popularWk4 = {
      item: 'Coke 500ml',
      qty: 45
    };

    assert.deepEqual(processTheData.mostPopular(weekFour), popularWk4)
  })

});

// least popular products.
describe("least popular product each week", function() {

  it("should return the least popular products in week1", function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    var leastWk1 = {
      item: 'Shampoo 1 litre',
      qty: 3
    };
    assert.deepEqual(processTheData.leastPopular(weekOne), leastWk1)
  })

  it("should return the least popular products in week2", function() {

    var weekTwo = {
      'Imasi': 36,
      'Bread': 28,
      'Chakalaka Can': 21,
      'Gold Dish Vegetable Curry Can': 27,
      'Fanta 500ml': 23,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 10,
      'Top Class Soy Mince': 21,
      'Shampoo 1 litre': 6,
      'Soap Bar': 5,
      'Bananas - loose': 28,
      'Apples - loose': 21,
      'Mixed Sweets 5s': 54,
      'Milk 1l': 28,
      'Heart Chocolates': 20,
      'Rose (plastic)': 14,
      'Valentine Cards': 14
    };

    var leastWk2 = {
      item: 'Soap Bar',
      qty: 5
    };

    assert.deepEqual(processTheData.leastPopular(weekTwo), leastWk2)
  })

  it("should return the least popular products in week3", function() {

    var weekThree = {
      'Imasi': 25,
      'Bread': 24,
      'Chakalaka Can': 17,
      'Gold Dish Vegetable Curry Can': 8,
      'Fanta 500ml': 14,
      'Coke 500ml': 18,
      'Cream Soda 500ml': 12,
      'Iwisa Pap 5kg': 4,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 4,
      'Soap Bar': 8,
      'Bananas - loose': 17,
      'Apples - loose': 25,
      'Mixed Sweets 5s': 29,
      'Milk 1l': 28
    };

    var leastWk3 = {
      item: 'Iwisa Pap 5kg',
      qty: 4
    };

    assert.deepEqual(processTheData.leastPopular(weekThree), leastWk3)
  })

  it("should return the least popular products in week4", function() {

    var weekFour = {
      'Imasi': 34,
      'Bread': 33,
      'Chakalaka Can': 33,
      'Gold Dish Vegetable Curry Can': 34,
      'Fanta 500ml': 24,
      'Coke 500ml': 45,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 16,
      'Top Class Soy Mince': 43,
      'Shampoo 1 litre': 13,
      'Soap Bar': 25,
      'Bananas - loose': 22,
      'Apples - loose': 32,
      'Mixed Sweets 5s': 40,
      'Milk 1l': 43
    };

    var leastWk4 = {
      item: 'Shampoo 1 litre',
      qty: 13
    };

    assert.deepEqual(processTheData.leastPopular(weekFour), leastWk4)
  })

});

// Most popular category.
describe("Most popular category", function() {

  it("should return the most popular category in week1", function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    var popularWk1 = {
      category: 'Soft Drinks',
      qty: 109
    };

    assert.deepEqual(processTheData.popularCategory(weekOne), popularWk1);
  });

  it("should return the most popular category in week2", function() {
    var weekTwo = {

      'Imasi': 36,
      'Bread': 28,
      'Chakalaka Can': 21,
      'Gold Dish Vegetable Curry Can': 27,
      'Fanta 500ml': 23,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 10,
      'Top Class Soy Mince': 21,
      'Shampoo 1 litre': 6,
      'Soap Bar': 5,
      'Bananas - loose': 28,
      'Apples - loose': 21,
      'Mixed Sweets 5s': 54,
      'Milk 1l': 28,
      'Heart Chocolates': 20,
      'Rose (plastic)': 14,
      'Valentine Cards': 14
    };

    var popularWk2 = {
      category: 'Soft Drinks',
      qty: 87
    };

    assert.deepEqual(processTheData.popularCategory(weekTwo), popularWk2)
  });

  it("should return the most popular category in week3", function() {
    var weekThree = {

      'Imasi': 25,
      'Bread': 24,
      'Chakalaka Can': 17,
      'Gold Dish Vegetable Curry Can': 8,
      'Fanta 500ml': 14,
      'Coke 500ml': 18,
      'Cream Soda 500ml': 12,
      'Iwisa Pap 5kg': 4,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 4,
      'Soap Bar': 8,
      'Bananas - loose': 17,
      'Apples - loose': 25,
      'Mixed Sweets 5s': 29,
      'Milk 1l': 28
    };

    var popularWk3 = {
      category: 'Dairy',
      qty: 53
    };
    assert.deepEqual(processTheData.popularCategory(weekThree), popularWk3);
  });

  it("should return the most popular category in week4", function() {
    var weekFour = {

      'Imasi': 34,
      'Bread': 33,
      'Chakalaka Can': 33,
      'Gold Dish Vegetable Curry Can': 34,
      'Fanta 500ml': 24,
      'Coke 500ml': 45,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 16,
      'Top Class Soy Mince': 43,
      'Shampoo 1 litre': 13,
      'Soap Bar': 25,
      'Bananas - loose': 22,
      'Apples - loose': 32,
      'Mixed Sweets 5s': 40,
      'Milk 1l': 43
    };

    var popularWk4 = {
      category: 'Soft Drinks',
      qty: 88
    };
    assert.deepEqual(processTheData.popularCategory(weekFour), popularWk4);
  });

});

// Least popular category.
describe("least popular category each week", function() {

  it("should return the least popular category in week1", function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    var leastWk1 = {
      category: 'Hygiene',
      qty: 15
    };
    assert.deepEqual(processTheData.leastCategory(weekOne), leastWk1)
  })

  it("should return the least popular category in week2", function() {

    var weekTwo = {
      'Imasi': 36,
      'Bread': 28,
      'Chakalaka Can': 21,
      'Gold Dish Vegetable Curry Can': 27,
      'Fanta 500ml': 23,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 10,
      'Top Class Soy Mince': 21,
      'Shampoo 1 litre': 6,
      'Soap Bar': 5,
      'Bananas - loose': 28,
      'Apples - loose': 21,
      'Mixed Sweets 5s': 54,
      'Milk 1l': 28,
      'Heart Chocolates': 20,
      'Rose (plastic)': 14,
      'Valentine Cards': 14
    };

    var leastWk2 = {
      category: 'Starch',
      qty: 10
    };

    assert.deepEqual(processTheData.leastCategory(weekTwo), leastWk2)
  })

  it("should return the least popular category in week3", function() {

    var weekThree = {
      'Imasi': 25,
      'Bread': 24,
      'Chakalaka Can': 17,
      'Gold Dish Vegetable Curry Can': 8,
      'Fanta 500ml': 14,
      'Coke 500ml': 18,
      'Cream Soda 500ml': 12,
      'Iwisa Pap 5kg': 4,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 4,
      'Soap Bar': 8,
      'Bananas - loose': 17,
      'Apples - loose': 25,
      'Mixed Sweets 5s': 29,
      'Milk 1l': 28
    };

    var leastWk3 = {
      category: 'Starch',
      qty: 4
    };

    assert.deepEqual(processTheData.leastCategory(weekThree), leastWk3)
  })

  it("should return the least popular category in week4", function() {

    var weekFour = {
      'Imasi': 34,
      'Bread': 33,
      'Chakalaka Can': 33,
      'Gold Dish Vegetable Curry Can': 34,
      'Fanta 500ml': 24,
      'Coke 500ml': 45,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 16,
      'Top Class Soy Mince': 43,
      'Shampoo 1 litre': 13,
      'Soap Bar': 25,
      'Bananas - loose': 22,
      'Apples - loose': 32,
      'Mixed Sweets 5s': 40,
      'Milk 1l': 43
    };

    var leastWk4 = {
      category: 'Starch',
      qty: 16
    };

    assert.deepEqual(processTheData.leastCategory(weekFour), leastWk4)
  })

});

// Most Profitable product.
var purchases = mappingPurchases.newLineSplit('./data-files/purchases.csv');
var weeklyPurchases = mappingPurchases.weeklyPurchases(purchases, "week4");

describe("Most profitable product", function() {

  it("should return the map of product and cost price for week 4", function() {

    var result = mappingPurchases.weeklyPurchases(purchases, 'week4');

    assert.deepEqual(result, {
      'Chakalaka Can': [9, 7, 7],
      'Bananas - loose': [1, 1],
      'Apples - loose': [1.5, 1.5],
      'Mixed Sweets 5s': [3],
      'Bread': [9, 11, 9],
      'Coke 500ml': [3.5, 3.5],
      'Cream Soda 500ml': [4.5, 4.5],
      'Fanta 500ml': [4.5, 6.5, 4.5],
      'Gold Dish Vegetable Curry Can': [5, 8.5, 5],
      'Imasi': [17, 17],
      'Milk 1l': [7, 7],
      'Top Class Soy Mince': [8, 8],
      'Soap Bar': [3, 3, 3],
      'Shampoo 1 litre': [20, 20],
      'Iwisa Pap 5kg': [30, 20]
    });
  });

  it('should return cost price map for week4', function() {

    var result = mappingPurchases.costPrices(weeklyPurchases);

    assert.deepEqual(result, {
      'Apples - loose': 1.5,
      'Bananas - loose': 1,
      'Bread': 9.67,
      'Chakalaka Can': 7.67,
      'Coke 500ml': 3.5,
      'Cream Soda 500ml': 4.5,
      'Fanta 500ml': 5.17,
      'Gold Dish Vegetable Curry Can': 6.17,
      'Imasi': 17,
      'Iwisa Pap 5kg': 25,
      'Milk 1l': 7,
      'Mixed Sweets 5s': 3,
      'Shampoo 1 litre': 20,
      'Soap Bar': 3,
      'Top Class Soy Mince': 8
    });
  });

  it('should return the total profit map', function() {

    assert.deepEqual(mappingPurchases.totalProfit({
      'Apples - loose': 1.5,
      'Bananas - loose': 1,
      'Bread': 9.67,
      'Chakalaka Can': 7.67,
      'Coke 500ml': 3.5,
      'Cream Soda 500ml': 4.5,
      'Fanta 500ml': 5.17,
      'Gold Dish Vegetable Curry Can': 6.17,
      'Amasi': 17,
      'Iwisa Pap 5kg': 25,
      'Milk 1l': 7,
      'Mixed Sweets 5s': 3,
      'Shampoo 1 litre': 20,
      'Soap Bar': 3,
      'Top Class Soy Mince': 8
    }, {
      'Milk 1l': 10,
      'Amasi': 25,
      'Bread': 12,
      'Chakalaka Can': 10,
      'Gold Dish Vegetable Curry Can': 9,
      'Fanta 500ml': 6.5,
      'Coke 500ml': 6.5,
      'Cream Soda 500ml': 7.5,
      'Iwisa Pap 5kg': 30,
      'Top Class Soy Mince': 12,
      'Shampoo 1 litre': 30,
      'Soap Bar': 6,
      'Bananas - loose': 2,
      'Apples - loose': 2,
      'Mixed Sweets 5s': 3
    }, {
      'Milk 1l': 41,
      'Amasi': 31,
      'Bread': 30,
      'Chakalaka Can': 28,
      'Gold Dish Vegetable Curry Can': 30,
      'Fanta 500ml': 22,
      'Coke 500ml': 42,
      'Cream Soda 500ml': 19,
      'Iwisa Pap 5kg': 15,
      'Top Class Soy Mince': 39,
      'Shampoo 1 litre': 10,
      'Soap Bar': 19,
      'Bananas - loose': 18,
      'Apples - loose': 27,
      'Mixed Sweets 5s': 28
    }), {
      'Amasi': 248,
      'Apples - loose': 13.5,
      'Bananas - loose': 18,
      'Bread': 69.9,
      'Chakalaka Can': 65.24,
      'Coke 500ml': 126,
      'Cream Soda 500ml': 57,
      'Fanta 500ml': 29.26,
      'Gold Dish Vegetable Curry Can': 84.9,
      'Iwisa Pap 5kg': 75,
      'Milk 1l': 123,
      'Mixed Sweets 5s': 0,
      'Shampoo 1 litre': 100,
      'Soap Bar': 57,
      'Top Class Soy Mince': 156
    });
  });

  it('should return the most profitable product', function() {
    assert.deepEqual(processTheData.mostProfitableProduct({
      'Amasi': 248,
      'Apples - loose': 13.5,
      'Bananas - loose': 18,
      'Bread': 69.9,
      'Chakalaka Can': 65.24,
      'Coke 500ml': 126,
      'Cream Soda 500ml': 57,
      'Fanta 500ml': 29.26,
      'Gold Dish Vegetable Curry Can': 84.9,
      'Iwisa Pap 5kg': 75,
      'Milk 1l': 123,
      'Mixed Sweets 5s': 0,
      'Shampoo 1 litre': 100,
      'Soap Bar': 57,
      'Top Class Soy Mince': 156
    }), {
      description: 'Most Profitable Product',
      product: 'Amasi',
      profit: 248
    });
  });

});

// Most profitable category.
describe('most profitable category', function() {

  it('should return a categories profit map', function() {

    var weekOne = {
      'Milk 1l': 39,
      'Imasi': 30,
      'Bread': 45,
      'Chakalaka Can': 23,
      'Gold Dish Vegetable Curry Can': 17,
      'Fanta 500ml': 33,
      'Coke 500ml': 54,
      'Cream Soda 500ml': 22,
      'Iwisa Pap 5kg': 17,
      'Top Class Soy Mince': 22,
      'Shampoo 1 litre': 3,
      'Soap Bar': 12,
      'Bananas - loose': 47,
      'Apples - loose': 36,
      'Mixed Sweets 5s': 49
    };

    assert.deepEqual(processTheData.mostProfitableCategory(weekOne, {
        'Dairy': 69,
        'Bakery': 45,
        'Canned Foods': 40,
        'Soft Drinks': 109,
        'Starch': 17,
        'Meat': 22,
        'Hygiene': 15,
        'Fruits': 83,
        'Sweets': 49
      }), {
        description: 'Most Profitable Category',
        category: 'Soft Drinks',
        profitValue: 109
      });

  });

});
