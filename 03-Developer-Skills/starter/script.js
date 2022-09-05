// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//Understand the problem
// - Array transformed into string
// - what is the x amount of days Answer = index + 1

//Break up into Sub-problems
// - transform arry into string
// - transform each element to string with ºC
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - log string to console

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`);

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log("..." + str);
};
printForecast(data1);
