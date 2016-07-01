// most popular products.
// var 
exports.mostPopular = function(filepath) {

  var min = 0;
  var mostProduct = "";

  filepath.forEach(function(user) {
    if (user.sold > min) {
      min = user.sold;
      mostProduct = user.products;
      //most = user.pPrice;
    }
  })
 console.log(mostProduct);
  return mostProduct;
};

// exports.mostPopular = function(dataToArray) {
//
//   var min = 0;
//   var mostProduct = "";
//
//   dataToArray.forEach(function(user) {
//     if (user.sold > min) {
//       min = user.sold;
//       mostProduct = user.products;
//       //most = user.pPrice;
//     }
//   })
//  // console.log(mostProduct);
//   return mostProduct;
// };


// least popular products.
// exports.leastPopular = function(productMaps) {
//   var min = 54;
//   var leastProduct = "";
//
//   productMaps.forEach(function(user) {
//     if (user.sold < min) {
//       min = user.sold;
//       leastProduct = {
//         item : user.products,
//         amount : min
//       }
//     }
//   });
//   console.log(leastProduct);
//   return leastProduct;
// };
