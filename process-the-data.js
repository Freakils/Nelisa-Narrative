// most popular products.
exports.mostPopular = function(listMap) {

  var max = 0;
  var mostPopProduct = {};

  for (var key in listMap) {

    if (listMap[key] > max) {
      max = listMap[key];

      // var popularWk1 = {
      //   'Coke 500ml': 54
      // };

      mostPopProduct = mostPopProduct += listMap[key];
    }
  }

  console.log(mostPopProduct);
  return mostPopProduct;
};

// exports.mostPopularProd = function(productMap){
// 		var mostPopularProduct = {};
// 		var max = 0;
// 		for(key in productMap){
// 			if(productMap[key] > max){
// 				max = productMap[key];
//
// 				mostPopularProduct = {
// 					product : key,
// 					quantity: max
// 				};
// 			}
// 		}
// 		return mostPopularProduct;
// }
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
