var assert = require("assert");
var arrayMap = require("../array-map");
var processTheData = require("../process-the-data");


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

    assert.deepEqual(weekOne, arrayMap.mappedWeeks("./data-files/week1.csv"));
    assert.deepEqual(weekTwo, arrayMap.mappedWeeks("./data-files/week2.csv"));
    assert.deepEqual(weekThree, arrayMap.mappedWeeks("./data-files/week3.csv"));
    assert.deepEqual(weekFour, arrayMap.mappedWeeks("./data-files/week4.csv"));
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

// Mapped purchases.
// describe("mapping purchases", function(){
//
//   it("should return mappe purchases")
//
// });
