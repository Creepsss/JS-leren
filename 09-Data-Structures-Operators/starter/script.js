'use strict';
/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = ` ${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(
    36,
    '-'
  );
  console.log(output);
}
*/
/*
// Coding challenge #4
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/
/*
const [firstName, lastName] = 'Sven Oldenburger'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
    console.log(namesUpper.join(' '));
  }
};

capitalizeName('jessica ann smith davis');
capitalizeName('sven oldenburger');

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+').padEnd(35, '+'));
console.log('Sven'.padStart(25, '-'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(47857349535545343));

// Repeat method
const message2 = 'Bad weather.. All Departues Delayed...';
console.log(message2.repeat(2));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};
planesInLine(5);
*/
/*
const airline = 'KLM Amsterdam';
// const plane = 'A320';

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Amsterdam'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf('') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat☢');
  } else {
    console.log('You are lucky ✨');
  }
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const fixCap = function (name) {
  const passengerLower = name.toLowerCase();
  return passengerLower[0].toUpperCase() + passengerLower.slice(1);
};
console.log(fixCap('bAMI'));

// Comparing emails
const email = 'hello@sven.io';
const loginEmail = '  Hello@Sven.Io \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to boarding door 34. Boarding door 23';
console.log(announcement.replaceAll('door', 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('A'));

if (plane.startsWith('Air') || plane.endsWith('neo'));
{
  console.log('Part of the new airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a latop, some food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time}`
    );
  },

  oderPasta: function (ing1, ing2, ing3) {
    console.log(
      `here is your delicous pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};

// Coding challange 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(gameEvents);
const time = [...gameEvents.keys()].pop();
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key <= 92) {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
*/
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'You are Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Conver object to map
// const hoursMap = new Map(Object.entries(openingHours));
// ------
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
// console.log(answer);
const answer = 3;

console.log(question.get(question.get('Correct') === answer));
*/
/*
// Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('Categories', ['Italiant', 'Pizzaria', 'Vegaterian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get('open') && time > rest.get('close')));

console.log(rest.has('Categories'));
console.log(rest.delete(2));
console.log(rest);
console.log(rest.size);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.get([1, 2]));
*/
/*
// Set
const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(orderSet);

console.log(new Set('Sven'));

console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));
orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto');
orderSet.clear();
console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Shef', 'Waiter', 'Manager', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
new Set(staff).size;
console.log(new Set('SvenOldenburger').size);
*/
/*

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// // 2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// // 3.
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// // 4.
// const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(player1Final);
// // 5.
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);
// // 6.
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewadonski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);
// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// // Coding challenge

// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${i + 1}: ${player}`);
// }

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odds;
// average /= odds.length;

// for (const [team, odds] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`;
//   console.log(`Odds of ${teamStr} ${odds}`);
// }
*/
/*
const rest1 = {
  name: 'Capri',
  numGuest: 0,
  // numGuest: 20,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator (||=) or (??=)
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest = rest1.numGuest || 10;

// Nulish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner = rest1.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);
*/
/*
restaurant.numGuests = 0;
const guest1 = restaurant.numGuests || 10;
console.log(guest1);

//Nulish coalescing Operator (??)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
console.log('----- OR -----');
//Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'HELLO' || 23 || null);

restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----- AND -----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
// 1) Destructuring

// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
console.log(...others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// 2) Functions
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += number[i];
    console.log(sum);
  }
};
add(2, 5, 6);

const x = [23, 45, 6];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', "tomato's");
restaurant.orderPizza('mushrooms');
*/
/*
const arr = [7, 8, 9, 10];
const badNewArr = [1, 2, arr[0], arr[2]];
console.log(badNewArr);

// Adding a array to and array
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables arrays, strings, maps, sets. NOT objects
const str = 'Sven';
const letters = [...str];
console.log(letters);
console.log(...str);

// Real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Let's make pasta! Ingredient 2?"),
//   prompt("Let's make pasta! Ingredient 3?"),
// ];
// restaurant.oderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, foundIn: 1998, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/
/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  startIndex: 1,
});

// Object destruturing
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);


const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

// Switching array variables
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(restaurant.order(2, 0));

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [];
console.log(p, q, r);
*/
