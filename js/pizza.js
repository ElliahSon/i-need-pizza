/*
* Create a variable for each order with the order number as the name of the variable.
* Create an object for each order based on the specs in the ReadMe
* Each object will have two nested objects ex.(pizza & toppings)
* Keys with more than one value should be an array of strings ex. Veggies
*/
var order11821 = {
  firstName:"James",
  lastName:"Franko",
  address:"2155 E Lake Dr",
  city:"Seattle",
  state: "WA",
  zipCode: 11310,

  pizza: {
    crust:thin,
    pizzaSauce: robust marinara,
    cheese: reular
  },

  toppings: {
    var veggies: [ 
    "olives", 
    "green peppers"]

    meats: [ "pepperoni", 
    "ham", 
    "sausage"]
  },

  sideItems: [ breadsticks, 
  bbq wings 6 piece
  ],
  sauces: ranch,
  specialInstructions: please cut into squares,
  paymentType: cash,
  storeId: 112,
};


var order11372 = {
  firstName: "Justin",
  lastName: "Bieber",
  address: "1801 W Rodeo Dr",
  city: "Beverly Hills",
  state: "CA",
  zipCode: 91833
  pizza: {
    crust: stuffed crust,
    pizzaSauce: creamy garlic alfredo,
    cheese: double
  },
  toppings: {
    veggies: onion, anchovies, mushrooms
    meats: chicken, bacon
  },

  sideItems: double fudge brownie dessert,
  sauces: [ "bbq", 
  "garlic sauce"
  ],
  specialInstructions: "call 815 at the gate",
  paymentType: credit card,
  storeId: 382
};

/*
* Create a new variable named currentOrders
* currentOrders should be single object containing both orders from above
*/
var currentOrders = {
   ders: [order11372, order11821]
}
  
/*
* Make the changes to the currentOrders object based on the ReadMe
* Run your file with node pizza.js
* Console.log(currentOrders) to verify changes have been made
*/

currentOrders.apples[0].Pizza.Sauce = "classic marinara";

currentOrders.apples[0].Toppings.Veggies.push("Spinarch");

currentOrders.apples[0].Toppings.Meats.pop();

currentOrders.apples[0].Others.orderTime = "20 minutes";

console.log(currentOrders.apples[0])