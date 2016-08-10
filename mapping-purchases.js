var fs = require("fs");

// creating an array.
exports.newLineSplit = function(filepath) {

  var purchasesList = fs.readFileSync(filepath, "utf8");

  var newPurchasesList = purchasesList
    .split('\n')
    .splice(1)
    .filter(Boolean);

  // console.log(newPurchasesList);

      var accessArrayCommas = [];

        newPurchasesList.forEach(function(list){
          accessArrayCommas.push(list
            .replace(/,/g , '.')
          )
        })

        // console.log(accessArrayCommas);

          var arrayReplaceCommas = [];

            accessArrayCommas.forEach(function(list){
                arrayReplaceCommas.push(list
                  .replace(/;/g , ','))
            })

            // console.log(arrayReplaceCommas);

              var arrayWithIndexes = [];

              for (var i = 0; i < arrayReplaceCommas.length; i++) {
                arrayReplaceCommas[i] = arrayReplaceCommas[i]
                  .split(',')
                  .splice(1);
              //
              // arrayReplaceCommas.forEach(function(list){
                arrayWithIndexes.push({
                  date: arrayReplaceCommas[i][0] + '-2016',
                  item: arrayReplaceCommas[i][1],
                  quantity: Number(arrayReplaceCommas[i][2]),
                  cost: Number(arrayReplaceCommas[i][3].replace(/R/ , ''))
                })
              // })
            }
            console.log(arrayWithIndexes);

            var purchasesMap = {};

            arrayWithIndexes.forEach(function(list){
              var item = list.item;
              var qty = list.quantity;
              var cost = list.cost;

              if(purchasesMap[item] === undefined){
                purchasesMap = 0;
              }

              purchasesMap[item] += qty;
            });

            console.log(purchasesMap);
            return purchasesMap;

};
