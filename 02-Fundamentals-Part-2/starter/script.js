"use strict";
/*
function logger() {
  console.log("My name is Sven");
}

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(17, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration
function calcAge1(birthYear) {
  return 2022 - birthYear;
}

const age1 = calcAge1(2005);
console.log(age1);

//function expression
const calcAge2 = function (birthyear) {
  return 2022 - birthyear;
};
const age2 = calcAge2(2004);

//arrow functions
const calcAge3 = (birthyear) => 2022 - birthyear;
const age3 = calcAge3(2005);
console.log(age3);

const yearsUntilRetire = (birthyear, firstName) => {
  const age = 2022 - birthyear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetire(2005, "Sven"));


function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} oranges pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));


const calcAge = function (birthyear) {
  return 2022 - birthyear;
};

const yearsUntilRetire = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`);
    return -1;
  }
};

console.log(yearsUntilRetire(2005, "Sven"));
console.log(yearsUntilRetire(1950, "Mike"));
*/

//challange 1
// const calcAvarega = (a, b, c) => (a + b + c) / 3;
// let scoreKoala = calcAvarega(65, 54, 49);
// let scoreDolfins = calcAvarega(44, 23, 71);

// const checkWinner = function (avgDolfins, avgKoala) {
//   if (avgDolfins >= 2 * avgKoala) {
//     console.log(
//       `Team Koala wins with the score being ${avgKoala} vs ${avgDolfins}`
//     );
//   } else if (avgKoala >= 2 * avgDolfins) {
//     console.log(
//       `Team Dolfin wins with the score being ${avgDolfins} vs ${avgKoala}`
//     );
//   } else {
//     console.log("No teams win :(");
//   }
// };

// checkWinner(scoreDolfins, scoreKoala);

// //challange 2
// scoreKoala = calcAvarega(85, 54, 41);
// scoreDolfins = calcAvarega(23, 34, 27);
// console.log(scoreDolfins, scoreKoala);
// checkWinner(scoreDolfins, score

// const friends = ["Kevin", "Twan", "Diem"];
// console.log(friends[2]);
//
// friends[1] = 'Jules';
// console.log(friends[1]);
//

// const calcAge = function (birthyear) {
//   return 2022 - birthyear;
// };
// const years = [1990, 1967, 2005, 2013, 2000];

// const age1 = 2022 - years[0];
// console.log(age1);

// years.push(1999);
// console.log(years[5]);

// years.unshift(1987);

// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
//
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bilss[0] + tips[0], bilss[1] + tips[1], bilss[2] + tips[2]];
//
// console.log(tips, bills, total);

// const sven = {
//   firstName: "Sven",
//   lastName: "Oldenburger",
//   age: 16,
//   job: "dishes",
//   friends: ["Kevin", "Diem", "Twan"],
// };

// console.log(sven);

// console.log(sven.lastName);
// console.log(sven["lastName"]);

// const nameKey = "Name";
// console.log(sven["first" + nameKey]);
// console.log(sven["last" + nameKey]);

// const intrest = prompt(
//   "what do you want to know about sven choose between name, lastname,age, job and friends"
// );

// if (sven[intrest]) {
//   console.log(sven[intrest]);
// } else {
//   console.log("wrong reqeust!");
// }

// sven.location = "Netherlands";
// sven["twitter"] = "@creeps";
// console.log(sven);

// //little challange
// console.log(
//   `${sven.firstName} has ${sven.friends.length} friends, and his best friend is ${sven.friends[0]}`
// );

//little challange
// const sven = {
//   firstName: "Sven",
//   lastName: "Oldenburger",
//   birthyear: 2005,
//   job: "dishwasher",
//   friends: ["Kevin", "Diem", "Twan"],
//   hasSDriverLiscencse: false,

//   calcAge: function () {
//     this.age = 2022 - this.birthyear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and he has ${this.hasSDriverLiscencse ? "a" : "no"} drivers liscense`;
//   },
// };

// console.log(sven.calcAge());

// console.log(sven.getSummary());

//coding challenge

// const mark = {
//   firstName: "Mark",
//   lastName: "Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const jhon = {
//   firstName: "Jhon",
//   lastName: "Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// console.log(jhon.calcBMI());
// mark.calcBMI();
// console.log(mark.calcBMI());
// jhon.calcBMI();

// if (mark.bmi > jhon.bmi) {
//   console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.bmi})
//   is higher than ${jhon.firstName} ${jhon.lastName}'s BMI (${jhon.bmi})`);
// } else if (jhon.bmi > mark.bmi) {
//   console.log(`${jhon.firstName} ${jhon.lastName}'s BMI (${jhon.bmi})
//   is higher than ${mark.firstName} ${mark.lastName}'s BMI ${mark.bmi})`);
// }

//for loop keeps running while the condition is TRUE it will stop when its FALSE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 😈`);
// }

// const types = [];

// for (let i = 0; i < svenArray.length; i++) {
//   console.log(svenArray[i]), typeof svenArray[i];

//   // types[i] = typeof svenArray[i];
//   types.push(typeof svenArray[i]);
// }

// console.log(types);

// const years = [1991, 2006, 2004, 2022];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// const svenArray = [
// "Sven",
// "Oldenburger",
// 2022 - 2005,
// "dishwasher",
// ["Kevin", "Twan", "Jules"],
// true,
// ];
//
// for (let i = svenArray.length - 1; i >= 0; i--) {
// console.log(i, svenArray[i]);
// }
//

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`you rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end....");
// }

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);
// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// const averageDolfin = calcAverage(85, 54, 41);
// const averageKoala = calcAverage(23, 34, 27);
// console.log(averageDolfin, averageKoala);

// const checkWinner = function (avgDolfin, avgKoala) {
//   if (avgDolfin >= 2 * avgKoala) {
//     return console.log(`dolphins win with ${averageDolfin} points`);
//   } else if (avgKoala >= 2 * avgDolfin) {
//     return console.log(`koalas win with ${avgKoala} points`);
//   } else {
//     return "no one wins";
//   }
// };

// checkWinner(averageDolfin, averageKoala);

// const calcTip = function (bill) {
//   return (bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];

// console.log(bills, tips, totals);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,

//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(`mark has won with ${mark.bmi}`);
// } else if (john.bmi > mark.bmi) {
//   console.log(`john has won with ${john.bmi}`);
// } else {
//   console.log(`no one has won!?`);
// }

// const calcTip = function (bill) {
//   return (bill = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2);
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(bills, tips, totals);
