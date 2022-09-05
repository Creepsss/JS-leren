'use strict';
/*
// // Defined in global Scope
// function calcAge(birthYear) {
//   const age = 2022 - birthYear;

//   // Second Scope
//   function printAge() {
//     let output = `${firstName}, You are ${age}, born in ${birthYear}`;
//     console.log(output);

//     //Block Scope
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const firstName = 'Jan';
//       const str = `Oh, and you a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //Cant do this
//     // console.log(add(2, 3))
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Sven';
// calcAge(2005);

// Variables
console.log(me);
//console.lo('job');
//console.job('year');

var me = 'Sven';
let job = 'Programmer';
const year = 2005;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(2005);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(2005);

const sven = {
  year: 2005,
  calcAge: function () {
    // console.log(this);
    console.log(2022 - this.birthYear);
  },
};
sven.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = sven.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
*/

// const sven = {
//   year: 2005,
//   firstName: 'Sven',
//   calcAge: function () {
//     console.log(this);
//     console.log(2022 - this.birthYear);
//   },

//   greet: () => console.log(`Hey ${this.firstName}`),
// };

// Works
let lastName = 'william';
let oldLastName = lastName;
lastName = 'davis';
console.log(`old last name ${oldLastName}`);
console.log(`new last name ${lastName}`);

// Doesnt work
const jessica = {
  firstName: 'jessica',
  lastName: 'William',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('before marriage', jessica);
console.log('after marriage', marriedJessica);

// Copying object
const jessica2 = {
  firstName: 'jessica',
  lastName: 'William',
  age: 27,
  family: ['Alice', 'Bob', 'James'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log(jessica2);
console.log(jessicaCopy);
