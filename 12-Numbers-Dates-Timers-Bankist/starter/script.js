'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-12-25T17:01:17.194Z',
    '2022-12-27T23:36:17.929Z',
    '2022-12-29T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMoveDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMoveDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    // In each call: print the remaining time UI
    labelTimer.textContent = `${min}:${sec}`;

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // Decrese 1s
    time--;
  };
  // Set time to 5 minutes
  let time = 120;
  // Call the timer every seconds
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// //FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //Experimenting API
    const now = new Date();

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //numeric, long, 2-digit
      year: 'numeric',
      // weekday: 'long', //short, narrow
    };
    // const locale = navigator.language;
    // console.log(locale); //ja japanese

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // //Create current date and time
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //Reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      // Add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      //Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //170. Converting and Checking Numbers
// console.log(23 === 23.0); //true

// //Base 10 - 0 to 9
// //Binary base 2 - 0 1
// console.log(0.1 + 0.2); // 0.3000000000000004
// console.log(0.1 + 0.2 === 0.3); //false

// //Conversion
// console.log(Number('23')); //23
// console.log(+'23'); //23

// //Parsing
// console.log(Number.parseInt('30px')); //30

// console.log(Number.parseInt('2.5rem')); //2
// console.log(Number.parseFloat('2.5rem')); //2.5

// //Check if value is NaN?
// console.log(Number.isNaN(20)); //false
// console.log(Number.isNaN(+'20X')); //true
// console.log(Number.isNaN(23 / 0)); //false -> infinity number

// //Check if value is number?
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite('20')); //false
// console.log(Number.isFinite(23 / 0)); //false

// //////////////////////////////////////////////////////////

// //171. Math and Rounding

// // 二乗
// console.log(Math.sqrt(25)); //5
// console.log(25 ** (1 / 2)); //5
// console.log(8 ** (1 / 3)); //2

// //Max and Min
// console.log(Math.max(5, 17, 34, 56, 6)); //56
// console.log(Math.max(5, 17, 34, '56', 6)); //56
// console.log(Math.max(5, 17, 34, '56px', 6)); //NaN
// console.log(Math.min(5, 17, 34, 56, 6)); //5

// // Calculate area of square
// console.log(Math.PI * Number.parseFloat('10px') ** 2); //314.1592653589793
// //半径 * 半径 * 3.14

// console.log(Math.trunc(Math.random() * 6) + 1); //1から6までのランダムな数字

// //最大値と最小値の間のランダムな数字
// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20)); //10と20の間の数字

// //Rounding integers
// console.log(Math.trunc(23.3)); //23
// console.log(Math.trunc(23.9)); //23

// console.log(Math.round(23.3)); //23
// console.log(Math.round(23.9)); //24

// console.log(Math.ceil(23.3)); //24
// console.log(Math.ceil(23.9)); //24

// console.log(Math.floor(23.3)); //23
// console.log(Math.floor(23.9)); //23

// //Compare trunc and floor
// console.log(Math.trunc(-23.3)); //-23
// console.log(Math.floor(-23.3)); //-24

// //Rounding decimals 小数点以下の桁数
// console.log((2.7).toFixed(0)); //3
// console.log((2.7).toFixed(3)); //2.700

////////////////////////////////////////////////////////////

// //172. The Reminder Operator
// console.log(5 % 2); //1
// console.log(5 / 2); //2.5

// //Chacking the number is even or odd
// const isEven = n => n % 2 === 0;
// console.log(isEven(23)); //false
// console.log(isEven(22)); //true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//   });
// });

//////////////////////////////////////////////////////////

// //173. Numeric Separators

// const diameter = 278_260_000_000;
// console.log(diameter); //278269000000

// const price = 345.99;
// console.log(price); //34599

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// const PI = 3.14_15;
// console.log(PI);

// console.log(Number('230_000')); //NaN
// console.log(parseInt('230_000')); //NaN

/////////////////////////////////////////////////////////

// //174. Working with BigInt

// console.log(2 ** 53 - 1); //9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
// console.log(2 ** 53 + 1); //9007199254740992

// console.log(93864322928756357586944634); //9.386432292875636e+25
// console.log(93864322928756357586944634n); //93864322928756357586944634n
// console.log(BigInt(93864322928756357586944634)); //93864322928756357895028736n

// //Operations
// console.log(10000n + 10000n); //20000n
// console.log(7563537484236475637485836n + 10000000n); //7563537484236475647485836n
// console.log(Math.sqrt(16n)); //ERROR: Cannot convert a BigInt value to a number

// const huge = 475578756575839458n;
// const num = 23;
// console.log(huge + BigInt(num)); //475578756575839481n

// //Exceptions
// console.log(20n > 15); //true
// console.log(20n === 20); //false
// console.log(typeof 20n); //bigint
// console.log(20n == '20'); //true;

// //Divisions
// console.log(10n / 3n); ///3n
// console.log(10/3); //3.33333333333335

///////////////////////////////////////////////////////////////////

// // 175. Creating Dates
// const now = new Date();
// console.log(now);
// //Wed Dec 28 2022 17:41:25 GMT-0800 (Pacific Standard Time)

// console.log(new Date('December 24, 2020'));
// //Thu Dec 24 2020 00:00:00 GMT-0800 (Pacific Standard Time)

// console.log(new Date(account1.movementsDates[0]));
// //Mon Nov 18 2019 13:31:17 GMT-0800 (Pacific Standard Time)

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// //Thu Nov 19 2037 15:23:05 GMT-0800 (Pacific Standard Time)

// //Working with Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear()); //2037
// console.log(future.getMonth()); //10
// console.log(future.getDate()); //19
// console.log(future.getDay()); //4
// console.log(future.getHours()); //15
// console.log(future.getMinutes()); //23
// console.log(future.getSeconds()); //0
// console.log(future.toISOString()); //2037-11-19T23:23:00.000Z
// console.log(future.getTime()); //2142285780000 <-TimeStamp
// console.log(new Date(2142285780000)); //Thu Nov 19 2037 15:23:00 GMT-0800 (Pacific Standard Time)

// future.setFullYear(2040); //年を変更できる
// console.log(future);

//////////////////////////////////////////////////////////////

// // 177. Operations With Dates
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future); //2142285780000

// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 3, 14), new Date(2037, 3, 24));
// console.log(days1); //10

/////////////////////////////////////////////////////////////

// //178. Internationalizing Dates(Intl)
// //Create current date and time
// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

//////////////////////////////////////////////////////////////

// //179. Internationalizing Numbers(Intl)

// const options = {
//   style: 'unit',
//   unit: 'mile-per-hour',
// };

// const num = 3884764.23;
// console.log('US: ', new Intl.NumberFormat('en-US', options).format(num)); //US: 3,884,764.23 mph
// console.log('Japan: ', new Intl.NumberFormat('ja-JA', options).format(num)); //Japan: 3,884,764.23 mph
// console.log('Syria: ', new Intl.NumberFormat('ar-SY', options).format(num)); //Syria:  ٣٬٨٨٤٬٧٦٤٫٢٣
// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language).format(num) //ja 3,884,764.23
// );

//////////////////////////////////////////////////////////////
// // 180. Timers: setTimeout and setInterval

// //setTimeout
// const ingredients = ['olives', 'spinich'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// //3秒後にconsoleに表示させる
// //Here is your pizza with olive and spnich
// console.log('Waiting ...');

// if (ingredients.includes('spinich')) clearTimeout(pizzaTimer);

// //setInterval
// setInterval(function () {
//   const now = new Date();
//   const hour = `${now.getHours()}`.padStart(2, 0);
//   const min = `${now.getMinutes()}`.padStart(2, 0);
//   const second = `${now.getSeconds()}`.padStart(2, 0);
//   console.log(`${hour}:${min}:${second}`);
// }, 1000);
// //毎秒consoleに表示

// 181. Inplementing a Cowntdown Timer
