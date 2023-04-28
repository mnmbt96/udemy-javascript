'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// BANKIST APP

//Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

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

//取引履歴を表示
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
     <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
     </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// displayMovements(account1.movements);
console.log(containerMovements.innerHTML);

//残高表示
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance} EUR`;
};
// calcDisplayBalance(account1.movements);

//収入、支出、利息を表示
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc - mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};
/////////////////////////////////////////////////////////////////
//151. Computing Username

//ownerのイニシャルをUsernameとしてオブジェクトに追加する
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
// console.log(accounts);

const updateUI = function (acc) {
  //Display movemensts
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

//158. Login
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  //入力のない状態でクリックしても動作しないようにする
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    console.log(currentAccount);

    //Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 10)) {
    //Add the movement
    currentAccount.movements.push(amount);

    //Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receriverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receriverAcc &&
    currentAccount.balance >= amount &&
    receriverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receriverAcc.movements.push(amount);
    console.log('transfer');
    updateUI(currentAccount);
  }
});

//160. The findIndex Method
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //Delete account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = '';
  }
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

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// //142. Simple Array Method
// let arr = ['a', 'b', 'c', 'd', 'e'];

// //Slice
// console.log(arr.slice(2)); //[ 'c', 'd', 'e' ]
// console.log(arr.slice(2, 4)); //[ 'c', 'd' ]
// console.log(arr.slice(-1)); //[ 'e' ]
// console.log(arr.slice(1, -2)); //[ 'b', 'c' ]
// console.log(arr.slice()); //[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr); //[ 'a', 'b', 'c', 'd', 'e' ]
// //sliceメソッドは元の配列に影響しない

// //Splice
// //sliceメソッドの引数に入れたインデックス番号の要素が配列から削除される
// arr.splice(-1);
// console.log(arr); //[ 'a', 'b', 'c', 'd' ] 最後の要素が削除された
// arr.splice(1, 2);
// console.log(arr); //[ 'a', 'd' ]　//1番目と２番目の要素が削除された

// //Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse()); //[ 'f', 'g', 'h', 'i', 'j' ]
// console.log(arr2); //[ 'f', 'g', 'h', 'i', 'j' ]
// //もとの配列も影響を受ける

// //Concat
// const letters = arr.concat(arr2);
// console.log(letters);
// //console.log([...arr, ...arr2])と同じ結果。どっちを受かっても良い。
// /*
// [
//   'a', 'b', 'c', 'd',
//   'e', 'f', 'g', 'h',
//   'i', 'j'
// ]
// */

// //Join
// console.log(letters.join('')); //abcdefghij
// console.log(letters.join('-')); //a-b-c-d-e-f-g-h-i-j

////////////////////////////////////////////////////////

// //143. The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]); //23
// console.log(arr.at(0)); //23

// console.log(arr[arr.length - 1]); //64
// console.log(arr.slice(-1)[0]); //64
// console.log(arr.at(-1)); //64

// //atメソッドは配列だけでなく、stringにも使える
// console.log('manami'.at(0)); //m

/////////////////////////////////////////////////////////
//144. Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// console.log('---for-of---');
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---forEach---');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });
// //0: function(200)
// //1: function(450)
// //2: function(-400)
// //...

// //途中でbreakしたい場合はfor-ofループ、最後までループさせる場合はforEach。
//　//forEachはbreakやcontinueが使えない。

////////////////////////////////////////////////////////////////

// //145. forEach With Maps and Sets
// //Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'JPY', 'CAD', 'EUR', 'USD']);

// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });
// //setはkey、インデックスがない。

///////////////////////////////////////////////////////////////////

// 150. The map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUsd = 1.1;

// const movementsUSD = movements.map(mov => mov * euroToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) {
//   movementsUSDfor.push(mov * euroToUsd);
// }
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

// console.log(movementsDescriptions);

/////////////////////////////////////////////////////////////////

//152. The filter Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //depositのみを表示
// const deposits = movements.filter(function (mov) {
//   return mov > 0;
// });
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// //withdrawのみを表示
// const withdrawal = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(withdrawal);

// const withdrawalFor = [];
// for (const mov of movements) if (mov < 0) withdrawalFor.push(mov);
// console.log(withdrawalFor);

//////////////////////////////////////////////////////////////////////

//153. The reduce Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //accumulator -> snowball
// //ループするたびに大きくなる
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iterration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// //second parametor 0 is a initial value of accumulator
// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// //Find the maximum number
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

////////////////////////////////////////////////////////////////

//155. The Magic of Chaining Methods

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const euroToUSD = 1.1;

// //PIPELINE
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * euroToUSD)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositsUSD);

///////////////////////////////////////////////////////

//157. The find Method

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

//filteとfindの違い
//1. filterは該当するもの全てを返すが、findは最初のエレメントのみ
//2. filterは新しい配列を返すが、findは配列ではなく要素のみを返す

// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

///////////////////////////////////////////////////////////
// //161.  some and every
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Equality
// console.log(movements.includes(-130));

// //SOME: CONDITION
// const anyDeposits = movements.some(mov => mov > 0); //true
// console.log(anyDeposits);

// //EVERY: CONDITION
// console.log(movements.every(mov => mov > 0)); //false
// //すべてのmovementsがより大きいかどうか

// const deposit = mov => mov > 0;

/////////////////////////////////////////

//162. flat and flatMap

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());
// //[1,2,3,4,5,6,7,8]

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat());
// //[ [ 1, 2 ], 3, 4, [ 5, 6 ], 7, 8 ]

// console.log(arrDeep.flat(2)); //2 means 2 levels deep
// //[1,2,3,4,5,6,7,8]

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
/*
[
  [
     200,  450, -400,
    3000, -650, -130,
      70, 1300
  ],
  [
    5000,  3400,  -150,
    -790, -3210, -1000,
    8500,   -30
  ],
  [
     200, -200, 340,
    -300,  -20,  50,
     400, -460
  ],
  [ 430, 1000, 700, 50, 90 ]
]
*/

// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// //flat
// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// //flatMap
// const overalBalance = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

/////////////////////////////////////////////////////////////

// //163. Sorting Arrays
// //Strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martin'];
// console.log(owners.sort());

// //Numbers
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// console.log(movements);
// console.log(movements.sort());
// //sortはstringの並び変えだから、数字の大小の並び替えには適していない

//return < 0, A, B
//return > 0, B, A

//Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });

//SAME
// movements.sort((a, b) => a - b);
// console.log(movements);

//Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

//SAME
// movements.sort((a, b) => b - a);
// console.log(movements);

//////////////////////////////////////////////////

//164. More Ways of Creating and Filling Arrays
// console.log([1, 2, 3, 4, 5, 6, 7]); //[1, 2, 3, 4, 5, 6, 7]
// console.log(new Array(1, 2, 3, 4, 5, 6, 7)); //[1, 2, 3, 4, 5, 6, 7]

// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x); //[ <7 empty items> ]

// x.fill(1);
// console.log(x); //[1,1,1,1,1,1,1]

// x.fill(23, 2, 4);
// console.log(x); //[1,1,23,23,1,1,1]
// //23を2と4の間に入れる

// //Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y); //[1,1,1,1,1,1,1]

// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z); //[1,2,3,4,5,6,7]

// labelBalance.addEventListener('click', function () {
//   const movemenstsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movemenstsUI);
//   //(8) [1300, 70, -130, -650, 3000, -400, 450, 200]
//   //残高の金額をクリックしたとき、€を除いた金額が配列としてconsoleに表示される

//   // const movemenstsUI2 = [...document.querySelectorAll('.movements_value')];
// });

//////////////////////////////////////////////////////////////////
//166. Array Method Practice
// //Exercise #1
// // depositsの合計金額を出す
// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// //Exercise #2
// // 取引金額が1000を超えた回数を出す
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposits1000);

// //Same result using reduce method
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// console.log(numDeposits1000);

// //Exercise #3
// // depositsとdithdrawalsの合計をそれぞれ出す
// const sums = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sums);

// //Exercise #4
// // 単語の最初の文字を大文字にする。ただし、'a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'は全部小文字。
// // this is a nice title -> This Is a Nice Title
// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');
//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an Example'));
