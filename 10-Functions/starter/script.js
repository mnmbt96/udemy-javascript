'use strict';

// // 128. Default Parameters
// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 100 * numPassengers //functionの引数の中に計算式を書いても良い
// ) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('AB123');
// //defaultを設定しない場合、引数を全て指定しないと、undefinedになる
// //{ flightNum: 'AB123', numPassengers: undefined, price: undefined }

// createBooking('AB123', 1, 100);
// //{ flightNum: 'AB123', numPassengers: 1, price: 100 }

// createBooking('AB123', undefined, 1000);
// //undefinedを指定すると、defaultが結果として返ってくる
// //{ flightNum: 'AB123', numPassengers: 1, price: 1000 }

// createBooking('AB123', 2);
// //priceを指定しない場合、defaultが計算されて２００
// //{ flightNum: 'AB123', numPassengers: 2, price: 200 }

///////////////////////////////////////////////////////

// //129. How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const manami = {
//   name: 'Manami Batai',
//   passport: 152739572,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Miss ' + passenger.name;

//   if (passenger.passport === 152739572) {
//     console.log('Check in');
//   } else {
//     console.log('Wrong passport');
//   }
// };

// checkIn(flight, manami); //Check in

// console.log(flight); //LH234
//値型で関数(fucntion)に渡させると、関数の中での変更は影響しないような挙動となる

// console.log(manami);
//{ name: 'Miss Manami Batai', passport: 152739572 }
//参照型で関数(fucntion)に渡させると、関数の中での変更は呼び出し元の変数にも影響するような挙動となる

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000);
// };

// newPassport(manami);
// checkIn(flight, manami); //Wrong passport

//////////////////////////////////////////////////////////

// //131. Function Accepting Callback Function
// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original String: ${str}`);
//   console.log(`Transformed String: ${fn(str)}`);
//   console.log(`Transformed by ${fn.name}`);
// };

// transformer('JavaScript is the best', upperFirstWord);
// /*
// Original String: JavaScript is the best
// Transformed String: JAVASCRIPT is the best
// Transformed by upperFirstWord
// */
// transformer('JavaScript is the best', oneWord);
// /*
// Original String: JavaScript is the best
// Transformed String: javascriptisthebest
// Transformed by oneWord
// */

// const high5 = function () {
//   console.log('👋');
// };

// // document.body.addEventListener('click', high5);
// ['Manami', 'Aya', 'Kanako'].forEach(high5); //👋👋👋

////////////////////////////////////////////////////////
// //132. Function Returning Functions
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeterHey = greet('Hey');
// greeterHey('Manami'); //Hey Manami
// greet('Hello')('Manami'); //Hello Manami

// const greet2 = greeting => name => {
//   console.log(`${greeting} ${name}`);
// };

// greet2('Yo')('Aya'); //Yo Aya

////////////////////////////////////////////////////////////////

// //133. The call and apply Methods
// const ana = {
//   airline: 'ANA',
//   code: 'AN',
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`
//     );
//   },
// };
// ana.book(239, 'Manami Batai');

// const eurowings = {
//   name: 'Eurowings',
//   code: 'EW',
// };

// const book = ana.book;
// //Does not work
// //book(23, 'Alex');

// //ANAの関数の中にあるものも、eurowingsの関数を呼び出すときに動かせる。
// book.call(eurowings, 23, 'Alex Williams');
// // book.call(ana, 522, 'Jumpei Yamana');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   code: 'SW',
//   bookings: [],
// };

// book.call(swiss, 583, 'George Cooper');
// //George Cooper booked a seat on Swiss Air Lines flight SW583

// // Apply method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// //George Cooper booked a seat on Swiss Air Lines flight SW583
// book.call(swiss, ...flightData);
// //George Cooper booked a seat on Swiss Air Lines flight SW583

///////////////////////////////////////////////////////////////////

// //134. The bind Method

// const bookEW = book.bind(eurowings);
// bookEW(23, 'Manami Batai');

// //With Event Listeners
// ana.planes = 300;
// ana.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', ana.buyPlane.bind(ana));

// //Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23);
// //addVat = value => value + value * 0.23;

// console.log(addVat(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     console.log(value + value * rate);
//   };
// };

// const addVat2 = addTaxRate(0.1);
// addVat2(100);

/////////////////////////////////////////////////////

// //136. Immediately Invoked Function Expression(IIFE)
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// //IIFE
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will never run again'))();

/////////////////////////////////////////////////////////

//137. Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker(); //1 passengers
// booker(); //2 passengers
// booker(); //3 passengers

function taro() {
  const parentValue = 'I am Taro';

  function saburo() {
    const saburoValue = 'I am Saburo';
    console.log(saburoValue);
    console.log(parentValue);
  }
  return saburo;
}

function jiro(v) {
  //引数で受け取ったvを実行
  //saburoの親はjiroそれともtaro?
  const parentValue = 'I am Jiro';
  v();
}

const taroReturn = taro();

//jiroの引数にtaroの戻り値、すなわちsaburoを渡す
jiro(taroReturn);
//I am Saburo I am Taro

///////////////////////////////////////////////////

//138. More Closure Example

// //Example1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f();
// console.dir(f); //[Function: f]
// //46

// //Re-assigning f function
// h();
// f();
// //1554

//g関数は実行が終了しているが、その後f関数が呼び出されている。
//f関数はg関数の中にあるため、gは1度しか実行されていないがaの値を計算している。

//Example2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
//関数内のperGroupの値が優先される。
boardPassengers(180, 3);
