var assert = require("assert");
var arrayMap = require("../array-map");
var processTheData = require("../process-the-data");

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

    assert.deepEqual(weekOne, arrayMap.csv("./data-files/week1.csv"));
    assert.deepEqual(weekTwo, arrayMap.csv("./data-files/week2.csv"));
    assert.deepEqual(weekThree, arrayMap.csv("./data-files/week3.csv"));
    assert.deepEqual(weekFour, arrayMap.csv("./data-files/week4.csv"));
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
    var pop = 'Mixed Sweets 5s';

    assert.equal(processTheData.mostPopular(weekOne, arrayMap.csv("./data-files/week1.csv")), pop);
  })

  //   it("should return the most popular products in week2", function() {
  //     var weekList = arrayMap.csv("./data-files/week2.csv")
  //     assert.equal(processTheData.mostPopular(weekList), "Mixed Sweets 5s")
  //   })
  //
  //   it("should return the most popular products in week3", function() {
  //     var weekList = arrayMap.csv("./data-files/week3.csv")
  //     assert.equal(processTheData.mostPopular(weekList), "Milk 1l")
  //   })
  //
  //   it("should return the most popular products in week4", function() {
  //     var weekList = arrayMap.csv("./data-files/week4.csv")
  //     assert.equal(processTheData.mostPopular(weekList), "Coke 500ml")
  //   })
  //
});

// least popular products.
// describe("least popular product each week", function() {
//
//   it("should return the least popular products in week1", function() {
//     var weekListTwo = arrayMap.csv("./data-files/week1.csv")
//     assert.equal(processTheData.leastPopular(weekListTwo), "Shampoo 1 litre")
//   })
//
//   it("should return the least popular products in week2", function() {
//     var weekListTwo = arrayMap.csv("./data-files/week2.csv")
//     assert.equal(processTheData.leastPopular(weekListTwo), "Soap Bar")
//   })
//
//   it("should return the least popular products in week3", function() {
//     var weekListTwo = arrayMap.csv("./data-files/week3.csv")
//     assert.equal(processTheData.leastPopular(weekListTwo), "Iwisa Pap 5kg")
//   })
//
//   it("should return the least popular products in week4", function() {
//     var weekListTwo = arrayMap.csv("./data-files/week4.csv")
//     assert.equal(processTheData.leastPopular(weekListTwo), "Shampoo 1 litre")
//   })

// });
