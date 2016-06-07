var assert = require("assert");
var products = require("../most-pop-products");


describe("most popular product each week", function() {

  it("should return the most popular products in week1", function() {
    var weekList = products.csv("./data-files/week1.csv")
    assert.equal(products.mostPopular(weekList), "Bananas - loose")
  })

  it("should return the most popular products in week2", function() {
    var weekList = products.csv("./data-files/week2.csv")
    assert.equal(products.mostPopular(weekList), "Mixed Sweets 5s")
  })

  it("should return the most popular products in week3", function() {
    var weekList = products.csv("./data-files/week3.csv")
    assert.equal(products.mostPopular(weekList), "Milk 1l")
  })

  it("should return the most popular products in week4", function() {
    var weekList = products.csv("./data-files/week4.csv")
    assert.equal(products.mostPopular(weekList), "Coke 500ml")
  })

});

// describe("least popular product each week", function() {
//
//   it("should return the least popular products in week1", function() {
//     var weekList = products.csv("./data-files/week1.csv")
//     assert.equal()
//   })
//
//   it("should return the least popular products in week2", function() {
//     var weekList = products.csv("./data-files/week2.csv")
//     assert.equal()
//   })
// });
