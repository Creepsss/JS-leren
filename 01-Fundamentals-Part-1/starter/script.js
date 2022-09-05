/*let js = "amazing";
console.log(40 + 40 + 80 - 20);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);


let myFirstJob = "Krantenwijk";
let myCuttentJob = "Afwasser";


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 2022;
console.log(typeof year);


let age = 30;
age = 31;

const birthYear = 2005;
// birthYear = 2004;

var job = "Krantenwijk";
job = "Afwasser";

lastName = "Oldenburger";
console.log(lastName);


const now = 2022;
const ageSven = now - 2005;
const ageSarah = now - 2013;
console.log(ageSven, ageSarah);

console.log(ageSven * 2, ageSven / 10, 2 ** 3);
// 2 ** 3 means 2 tot de macht 3 = 2 * 2 * 2

const firstName = "Sven";
const lastName = "Oldenburger";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--; // x = x - 1
console.log(x);

//Comaprison operators
console.log(ageSven > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // is equal or greater then 18

const isFullAge = ageSarah >= 18;

console.log(now - 2005 > now - 2013);


const now = 2022;
const ageSven = now - 2005;
const ageSarah = now - 2013;

console.log(now - 2005 > now - 2013);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 20
console.log(x, y);

const avargeAge = (ageSven + ageSarah) / 2;
console.log(ageSven, ageSarah, avargeAge);



GOOD LUCK




const firstName = "Sven";
const job = "Afwasser";
const birthYear = 2005;
const year = 2022;

// const sven =
//   "I'm" +
//   " " +
//   firstName +
//   ", a" +
//   (year - birthYear) +
//   "year old that does" +
//   job +
//   "!";
// console.log(sven);

const svenNew = `I'm ${firstName}, a ${
  year - birthYear
} year old boy that does ${job}`;
console.log(svenNew);

console.log(`Just a regular string....!`);

console.log("String with \n\
multiple \n\
lines");

console.log(`string
multiple
lines`);


//driver lisence

const age = 15;
const isOldEnough = age >= 19;

// if is old enough 18+ its says she can ride else it says she can not ride
if (isOldEnough) {
  console.log(`Sarah can start driving lisence 😀`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. wait another ${yearsLeft} years :)`);
}

//this will check if your born in the 20 or 21 century
const birthYear = 2005;

let century;
if (birthYear <= 200) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


//GOOD LUCK 2
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const BMIMark = markMass / markHeight ** 2;
const BMIJohn = johnMass / johnHeight ** 2;
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher then John's BMI (${BMIJohn})`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher then Mark's BMI (${BMIMark})`);
}


//type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18);
console.log(Number(inputYear));

console.log(Number("Sven"));
console.log(typeof NaN);

console.log(String(23), 23);

//type coercion
console.log("I am " + 16 + "year old boy");
console.log("23" - "10" - 3);
console.log("1" + 1);
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);


// 5 falsy values: 0, '', undefined, null, NaN
// truthy values: strings, Numbers, {}, .....

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Sven"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("you should get a job :P");
}

let height;
if (height) {
  console.log("YAY height is defined");
} else {
  console.log("Height is UNDEFINED");
}


const age = 18;

if (age === 18) console.log("YAY your an adult now (strict)");
if (age == 18) console.log("YAY your an adult now (loose)");

const favourite = Number(prompt("what's your favourite numer"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 11) {
  console.log("cool 11 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else {
  console.log("number is not one of my favourites");
}

if (favourite !== 23) {
  console.log("why not the number 23");
}


const hasDriverLisence = true; //a
const hasGoodVision = true; //b
const isTired = true; //c

console.log(hasDriverLisence && hasGoodVision); //true
console.log(hasDriverLisence || hasGoodVision); //true
console.log(!hasDriverLisence); // false

const shouldDrive = hasDriverLisence && hasGoodVision && !isTired;

console.log(hasDriverLisence && hasGoodVision && !isTired);

if (shouldDrive) {
  console.log("she can drive");
} else {
  console.log("someone else should drive");
}

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀

const averageScoreDolfin = (96 + 108 + 89) / 3;
const averageScoreKoala = (88 + 91 + 110) / 3;
console.log(averageScoreDolfin, averageScoreKoala);

if (averageScoreDolfin > averageScoreKoala && averageScoreDolfin >= 100) {
  console.log("Dolfin WON");
} else if (averageScoreKoala > averageScoreDolfin && averageScoreKoala >= 100) {
  console.log("Koala WON");
} else if (
  averageScoreDolfin === averageScoreKoala ||
  averageScoreDolfin <= 100 ||
  averageScoreKoala <= 100
) {
  console.log("DRAW");
}


const day = "thursday";

switch (day) {
  case "monday":
    console.log("plan work");
    console.log("plan basketball training");
    break;
  case "tuesday":
    console.log("plan school");
    break;
  case "wednesday":
    console.log("planning stage");
    break;
  case "thursday":
    console.log("thursday");
    break;
  case "friday":
    console.log("almost weekend");
    break;
  case "saturday":
    console.log("weekend");
    break;
  case "sunday":
    console.log("almost going back to school");
    break;
}

if (day === "monday") {
  console.log("monday");
} else if (day === "tuesday") {
  console.log("tuesday");
} else if (day === "wednesday") {
  console.log("wednesday");
} else if (day === "thursday") {
  console.log("thursday");
}

const age = 18;
age >= 18
  ? console.log(`i can drink alcohol`)
  : console.log(`i cant drink alcohol`);

let drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${(drink = age >= 18 ? "wine" : "water")}`);


const bill = 400;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `the bill was ${bill}, the tip was ${tip}, and the total value of the bill is ${
    bill + tip
  }`
);
*/
