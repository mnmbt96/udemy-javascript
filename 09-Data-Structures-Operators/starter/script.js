'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIdex, mainIndex) {
    return [this.starterMenu[starterIdex], this.mainMenu[mainIndex]];
  },

  orderDelivary({ starterIdex = 1, mainIndex = 0, time = '20:00', address }) {
    return `Order received! ${this.starterMenu[starterIdex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time} `;
  },

  orderPasta(ing1, ing2, ing3) {
    // console.log(
    //   `Here is your delicios pasta with ${ing1}, ${ing2}, and ${ing3}`
    // );
  },

  orderPizza(mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },

  //ES6 enhanced object leterals
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
};

/*   103. Destructuring Array  */
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
//console.log(a, b, c); //1,2,3

//Destructuring
// const [x, y, z] = arr;
//console.log(x, y, z); //1,2,3

// const [first, second] = restaurant.categories;
//console.log(first, second); //Italian Pizzeria

//1つ飛ばす
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); //Italian Vegetarian

//Swiching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);//Vegetarian Italian

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

//Receive 2 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse); //Garlic Bread Pizza

//Nested distoructuring
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k); //2 5 6

//Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); //8 9 1

/////////////////////////////////////////////////////////////

/*  104. Destructuring Object  */
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
/*
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
*/

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);
/*
Classico Italiano {
  thu: { open: 12, close: 22 },
  fri: { open: 11, close: 23 },
  sat: { open: 0, close: 24 }
} [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
*/

//Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
//console.log(menu, starters); //[] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//Muteting variables
// let d = 111;
// let e = 999;
// const obj = { d: 23, e: 7, f: 14 };
//括弧で囲う
// ({ d, e } = obj);
//console.log(d, e); //23 7

//Nested objects
// const {
//   fri: { open: op, close: cl },
// } = openingHours;
// console.log(op, cl); //11 23

//引数の中身の順番は関係ない
// console.log(
//   restaurant.orderDelivary({
//     time: '20:00',
//     address: 'Vancouver',
//     mainIndex: 2,
//     starterIdex: 2,
//   })
// );
//Order received! Garlic Bread and Risotto will be deliverd to Vancouver at 20:00

//引数の数が違ってもデフォルトが設定されているからOK
// console.log(
//   restaurant.orderDelivary({
//     address: 'Calgary',
//     starterIdex: 1,
//   })
// );
//Order received! Bruschetta and Pizza will be deliverd to Calgary at 20:00

///////////////////////////////////////////////////////////////

/*  105. The Spread Operator(...)  */
// const array = [7, 8, 9];
// const badArray = [1, 2, array[0], array[1], array[2]];
// console.log(badArray); //[ 1, 2, 7, 8, 9 ]

// const newArr = [1, 2, ...array];
// console.log(newArr); //[ 1, 2, 7, 8, 9 ]

// console.log(...newArr); //1 2 7 8 9

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);//[ 'Pizza', 'Pasta', 'Risotto', 'Gnocci' ]

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays
// const menuAll = [...restaurant.starterMenu, ...restaurant.mainMenu];
//console.log(menuAll);
/*
[
  'Focaccia',
  'Bruschetta',
  'Garlic Bread',
  'Caprese Salad',
  'Pizza',
  'Pasta',
  'Risotto'
]
*/

//Iterables: arrays, strings, maps, sets, NOT objects
// const str = 'Manami';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
/*
[
  'M', 'a',  'n',
  'a', 'm',  'i',
  ' ', 'S.'
]
*/
// console.log(...str); //M a n a m i

//A real world example
// const ingredients = [
//   prompt("Let's make past! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
//Here is your delicios pasta with a, b, and c

//Objects
// const newRestaurant = { foundIn: 1998, ...restaurant, founder: 'Guiseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Rostorante Roma';
// console.log(restaurantCopy.name); //Rostorante Roma
// console.log(restaurant.name); //Classico Italiano

////////////////////////////////////////////////////////////////////

//106. Rest Pattern and Parameters

//SPREAD, because on right side of =
// const arr106 = [1, 2, ...[3, 4]];
//console.log(arr106); //[ 1, 2, 3, 4 ]

//REST, because on left side of =
// const [m, n, ...others] = [1, 2, 3, 4, 5];
//console.log(m, n, others); //1 2 [ 3, 4, 5 ]

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
//console.log(pizza, risotto, otherFood);
//Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//Objects
// const { sat, ...weekdays } = restaurant.openingHours;
//console.log(weekdays);
//{ thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//console.log(sum);
// };
// add(2, 3); //5
// add(4, 5, 6); //15
// add(7, 8, 9, 10); //34

// const l = [23, 5, 7];
// add(...l); //35

// restaurant.orderPizza('Mushroom', 'Onion', 'Olives', 'Spinach'); //Mushroom[ 'Onion', 'Olives', 'Spinach' ]

////////////////////////////////////////////////////////////////////////////

//106. Short Circuiting

// console.log('----- OR -----');
// console.log(0 || 'manami'); //manami
// console.log(3 || 'manami'); //3
// console.log('' || 'manami'); //manami
// console.log(true || 0); //true
// console.log(undefined || null); //null
// console.log(undefined || 0 || '' || 'hello' || 23 || null); //hello

// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1); //10

// restaurant.numGuests = 23;
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2); //23

// console.log('----- AND -----');
// console.log(0 && 'manami'); //0
// console.log(3 && 'manami'); //manami
// console.log('' && 'manami'); //''
// console.log(true && 0); //0
// console.log(undefined && null); //undefined
// console.log('hello' && 23 && null && 'manami'); //null

//if it exsists, execute the function
// if (restaurant.orderPizza) {
// restaurant.orderPizza('mashrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mashrooms', 'spinach');

/////////////////////////////////////////////////////////////////

// 108. The Nullish Coalescing Operator(??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests); //10

//Nullish: null and undefined (NOT 0 or "")
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect); //10

//////////////////////////////////////////////////////////////////

//109. Logical Assignment Operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest2.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

//上のコードを同じ
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest1);
//{ name: 'Capri', numGuests: 10 } 実際は０の値が１０になってしまう
// console.log(rest2);
//{ name: 'La Piazza', owner: 'Giovanni Rossi', numGuests: 10 }

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest2.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// rest1.owner &&= '<ANONYMOUS>'; //ownerが存在していないので表示されない
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
//{ name: 'Capri', numGuests: 0 }　実際の０のまま表示
// console.log(rest2);
//{ name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10 }

/////////////////////////////////////////////////////////////////

// ///111. Looping Arrays: The for-of loop
// const allMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //console.log(item);
// /*
// Focaccia
// Bruschetta
// Garlic Bread
// Caprese Salad
// Pizza
// Pasta
// Risotto
// */

// // for (const item of allMenu) console.log(item);
// for (const [i, el] of allMenu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// ///////////////////////////////////////////////

// // 113. Optional Chaining(?)
// if (restaurant.openingHours && restaurant.openingHours.mom) {
//   // console.log(restaurant.openingHours.mom.open);
//   //何も返ってこない
// }

// //With optional chaining
// //?がないとエラーになるけど、つければundefinedが返ってくる
// // console.log(restaurant.openingHours?.mom?.open);
// //undefined

// //Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// // for (const day of days) {
// //   // console.log(day);
// //   const open = restaurant.openingHours[day]?.open ?? 'closed';
// //   console.log(`On ${day}, we open at ${open}`);
// // }
// /*
// On mon, we open at closed
// On tue, we open at closed
// On wed, we open at closed
// On thu, we open at 12
// On fri, we open at 11
// On sat, we open at 0
// On sun, we open at closed
// */

// // //Mothods
// // console.log(restaurant.order?.(0, 1) ?? 'Mothod doesn not exists'); //[ 'Focaccia', 'Pasta' ]
// // console.log(restaurant.orderRisotto?.(0, 1) ?? 'Mothod doesn not exists'); //Mothod doesn not exists

// // //Arrays
// // const users = [{ name: 'manami', Email: 'manami@manami.com' }];
// // console.log(users[0]?.name ?? 'User array empty'); //manami

// // //上と同じ文をif/elseで書いたもの
// // if (users.length > 0) console.log(users[0].name);
// // else console.log('User array empty'); //manami

// //////////////////////////////////////////////////////

// //114. Looping Objects: Object Keys, Values, and Entries

// //Propaty NAMES
// const propaties = Object.keys(openingHours);
// console.log(propaties); //[ 'thu', 'fri', 'sat' ]

// let openStr = `We are open ${propaties.length} days:`;

// for (const day of Object.keys(openingHours)) {
//   openStr += ` ${day}`; //thu fri sat
// }
// console.log(openStr); //We are open 3 days: thu fri sat

// //Propaty Values
// const values = Object.values(openingHours);
// console.log(values);
// /*
// [
//   { open: 12, close: 22 },
//   { open: 11, close: 23 },
//   { open: 0, close: 24 }
// ]
// */

// //Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);
// /*
// [
//   [ 'thu', { open: 12, close: 22 } ],
//   [ 'fri', { open: 11, close: 23 } ],
//   [ 'sat', { open: 0, close: 24 } ]
// ]
// */

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key}, we open at ${open} and close ${close}`);
// }
// /*
// On thu, we open at 12 and close 22
// On fri, we open at 11 and close 23
// On sat, we open at 0 and close 24
//  */

////////////////////////////////////////////////////////////

// //116. Sets
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(ordersSet); //Set(3) { 'Pasta', 'Pizza', 'Risotto' }
// //重複なし

// console.log(new Set('Manami')); //{ 'M', 'a', 'n', 'm', 'i' }

// console.log(ordersSet.size); //3
// //lengthじゃなくてsize

// console.log(ordersSet.has('Pizza')); //true
// //includeメソッドに似ている

// ordersSet.add('Garlic Bread');
// console.log(ordersSet); //Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }

// ordersSet.delete('Risotto');
// console.log(ordersSet); //Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

// //setはインデックスがない 順番関係ない　　データを取り出す必要もない
// //ループ使える

// for (const order of ordersSet) {
//   console.log(order); //Pasta Pizza Garlic Bread
// }

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // const staffUnique = new Set(staff);
// // console.log(staffUnique); //Set(3) { 'Waiter', 'Chef', 'Manager' }

// // //setをarrayにする方法
// // const staffUnique = [...new Set(staff)];
// // console.log(staffUnique); //[ 'Waiter', 'Chef', 'Manager' ]

// //arrayの中の重複していない要素数を調べる方法
// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// ); //3

// //Stringの重複していない要素数を調べる方法
// console.log(new Set('manamibatai').size); //6

// //////////////////////////////////////////////////////////////////

// //117. Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// console.log(rest);
// /*
// Map(3) {
//   'name' => 'Classico Italiano',
//   1 => 'Firenze, Italy',
//   2 => 'Lisbon, Portugal'
// }
// */

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(');

// console.log(rest.get('categories')); //[ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]
// console.log(rest.get(true)); //We are open :D

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));
// //We are open :D

// // console.log(rest.has('categories'));
// // rest.delete(2);
// // console.log(rest);
// // console.log(rest.size);
// // rest.clear();
// // console.log(rest);

// // rest.set([1, 2], 'Test');

// const arr = [1, 2];
// rest.set(arr, 'Test');

// //document.querySelectorをkeyとして指定できる
// rest.set(document.querySelector('h1'), 'Heading');

// ////////////////////////////////////////////////////////////

// //118. Maps: Itaration

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
// //   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Java Script'],
//   ['correct', 3],
//   [true, 'Correct🎉'],
//   [false, 'Try Again!'],
// ]);
// console.log(question);

// // //Object.entriesとMapは同じ
// // //Convert onject to Map
// // console.log(Object.entries(openingHours));
// // const hoursMap = new Map(Object.entries(openingHours));
// // console.log(hoursMap);

// //quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert Map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);

////////////////////////////////////////////////////////////////////
// //121. Working with Strings - Part1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //A
// console.log(plane[1]); //3
// console.log(plane[2]); //2
// console.log('B737'[0]); //B

// console.log(airline.length); //16
// console.log('B737'.length); //4

// console.log(airline.indexOf('r')); //6
// console.log(airline.lastIndexOf('r')); //10　　最後のrのインデックス番号
// console.log(airline.indexOf('Portugal')); //8
// console.log(airline.slice(4)); //Air Portugal 4番目以降を表示　（substring）
// console.log(airline.slice(4, 7)); //Air 4番目以降、7番目以前

// console.log(airline.slice(0, airline.indexOf(' '))); //TAP 0から空白まで
// console.log(airline.slice(airline.lastIndexOf(' ') + 1)); //Portugal

// console.log(airline.slice(-2)); //al 最後の２文字
// console.log(airline.slice(1, -1)); //AP Air Portuga

// const checkMiddleSeat = function (seat) {
//   //B and E are middle seat
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat.');
//   else console.log('You got luckey');
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(new String('Manami')); //[String: 'Manami']
// console.log(typeof new String('Manami')); //object
// console.log(typeof new String('Manami').slice(1)); //string

///////////////////////////////////////////////////////////////////

// //122. Working with Strings - Part2
// const airline = 'TAP Air Portugal';
// console.log(airline.toLowerCase()); //全部小文字
// console.log(airline.toUpperCase()); //全部大文字

// const passenger = 'mAnamI';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Manami

// // Comparing email
// const email = 'hello@manami.com';
// const loginEmail = ' Hello@Manami.com \n';

// const lowerEmail = loginEmail.toLowerCase(); //小文字にする
// const trimedEmail = lowerEmail.trim(); //
// console.log(trimedEmail); //hello@manami.com

// //上のコードと同じ
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail); //hello@manami.com

// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.replace('£', '$').replace(',', '.');
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boaring door 23.';
// console.log(announcement.replaceAll('door', 'gate'));

// //Regular expressiom
// console.log(announcement.replace(/door/g, 'gate'));

// //Booleans
// const plane = 'Airbus A320neo';
// console.log(plane.includes('A320')); //true

// if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family');
// }

// //Practice Exercise
// const checkBaggage = function (items) {
//   const baggege = items.toLowerCase();
//   if (baggege.includes('knife') || baggege.includes('gun')) {
//     console.log('You are not allowed');
//   } else {
//     console.log('Welcome aboard');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection.');

//////////////////////////////////////////////////////////////

//123. Working with Strings - Part3

console.log('a+very+nice+string'.split('+')); //[ 'a', 'very', 'nice', 'string' ]
console.log('Manami Batai'.split(' ')); //[ 'Manami', 'Batai' ]

const [firstName, lastName] = 'Manami Batai'.split(' ');

const newName = ['Ms.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); //Ms. Manami BATAI

const capitalizedName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizedName('jessica ann smith davis'); //Jessica Ann Smith Davis
capitalizedName('manami batai'); //Manami Batai

// Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+')); //++++++Go to gate 23!++++++++++
console.log('Manami'.padStart(20, '+').padEnd(30, '+')); //++++++++++++++Manami++++++++++

const maskCreditCard = function (number) {
  const str = number + ''; //NumberをStringにする
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(26458597374849594)); //*************9590
console.log(maskCreditCard('746352820756437')); //***********6437

//Repeat
const messsage2 = 'Bad weather... All depatures Delayed... ';
console.log(messsage2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(6); //There are 6 planes in line ✈️✈️✈️✈️✈️✈️
