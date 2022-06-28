/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/

const listOfProducts = [
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "TV",
      quantity: 10,
      description: "television",
    },
    {
      productName: "AC",
      quantity: 5,
      description: "air conditioner",
    },
    {
      productName: "FAN",
      quantity: 10,
      description: "Ceiling Fan",
    },
  ];
  
  /*  --------------------  Answer 1 ----------------------- */
  var obj = {};
  for (var i = 0; i < listOfProducts.length; i++) {
    // console.log(listOfProducts[i].productName)
  
    if (obj[listOfProducts[i].productName] == undefined) {
      obj[listOfProducts[i].productName] = 1;
    } else {
      obj[listOfProducts[i].productName]++;
    }
  }
  console.log(obj); //{ TV: 2, AC: 2, FAN: 1 }
  


  /*  --------------------  Answer 2 ----------------------- */
  var map1 = new Map();
  listOfProducts.map((el) => {
    map1.set(el.productName, el.description);
  });
  
  // console.log(map1)
  
  function sumQuantity(el) {
    var mainObj = {};
  
    el.forEach(function (obj) {
      if (obj.productName in mainObj) {
        mainObj[obj.productName] += obj.quantity;
      } else {
        mainObj[obj.productName] = obj.quantity;
      }
    });
  
    var arr = [];
  
    for (var keys in mainObj) {
      arr.push({
        productName: keys,
        quantity: mainObj[keys],
        description: map1.get(keys),
      });
    }
    return arr;
  }
  
  console.log(sumQuantity(listOfProducts)); /* [
                                          { productName: 'TV', quantity: 20, description: 'hello' },
                                          { productName: 'AC', quantity: 10, description: 'air conditioner' },
                                          { productName: 'FAN', quantity: 10, description: 'Ceiling Fan' }
                                      ]
                                      */