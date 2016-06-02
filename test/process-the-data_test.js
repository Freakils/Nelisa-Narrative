var assert = require("assert");

var products = require("../products");

describe("products", function() {

  it("it should return the most popular products in week1", function() {
    var weekList = products.csv("./files/week1.csv")
    assert.equal(products.mostPopular(weekList), "Bananas - loose")
  })

  it("it should return the most popular products in week2", function() {
    var weekList = products.csv("./files/week2.csv")
    assert.equal(products.mostPopular(weekList), "Mixed Sweets 5s")
  })

  it("it should return the most popular products in week3", function() {
    var weekList = products.csv("./files/week3.csv")
    assert.equal(products.mostPopular(weekList), "Milk 1l")
  })

  it("it should return the most popular products in week4", function() {
    var weekList = products.csv("./files/week4.csv")
    assert.equal(products.mostPopular(weekList), "Coke 500ml")
  })

});
