// module.exports = function(){
  var fs = require("fs");

  var list = fs.readFileSync("./data-files/week1.csv", "utf8");
    var newList = list.split("\n").splice(1).filter(Boolean);

    

  });

  return newData;
  console.log(newData);

// }
