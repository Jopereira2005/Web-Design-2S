let somaAnonima = function(a, b) {
  return a + b;
};

console.log(soma(2, 3)); // 5

let somaArrow = (a, b) => a + b;

console.log(soma(2, 3)); // 5

var x = BigInt("123456789012345678901234567890");

let carsArray = ["Saab", "Volvo", "BMW"];

let carsNested = [["Saab", 5], [ "Volvo",2], ["BMW",4]];
Cars[0] // [“Saab”, 5]
cars[0][0] // Saab
cars[0][1] // 5

let myArray = ["Fabio", 5, true, ["Ferrari", "Porsche", "Lamborghini"]];

fruits = ["Banana", "Orange", "Apple", "Mango"];
for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
for (let item of fruits) {
console.log(item);
}

Array.isArray(fruits); // returns true
fruits instanceof Array; // returns true


// length
// sort()
// toString()
// join() joins all array elements into a string.
// pop() removes the last element from an array
// push() adds a new element to an array (at the end)
// shift() removes the first array element and "shifts" all other elementsto a lower index
// unshift() adds a new element to an array (at the beginning), and "unshifts" older elements
// delete fruits[0]; Changes the first element in fruits to undefined

// splice() can be used to add new items to an array
// fruits.splice(2, 0, "Lemon", "Kiwi");
// (2) defines the position where new elements should be added (spliced in)
// (0) defines how many elements should be removed
// ("Lemon" , "Kiwi") define the new elements to be added
// can remove elements without leaving "holes" in the array
// fruits.splice(0, 1); // Removes the first element of fruits
// concat() creates a new array by merging (concatenating) existing arrays
// var myChildren = myGirls.concat(myBoys);
// slice() slices out a piece of an array into a new array
// var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// var citrus = fruits.slice(1,2);

const person1 = {firstName:"John", lastName:"Doe"};

var person2 = {
  "firstName":"John",
  "lastName":"Doe",
  "age":50,
  "eyeColor":"blue",
};

const pessoa = {
  "nome": "Fabio",
  "idade": 50,
  "isProfessor": true
}

for (let prop in pessoa) {
  console.log(prop +" "+pessoa[prop]);
}

var person3 = {
  "firstName":"John",
  "lastName":"Doe",
  "age":50,
  "eyeColor":"blue",

  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Para número inteiro (integer):
// parseInt()
// Para número decimal (float):
// parseFloat()
// Conversão de Tipos de dados
// Para string:
// toString()
// JavaScript tentará converter strings em números em todas as operações numéricas:
// Funciona
let x = "100";
let y = "10";
let z = x / y;
  