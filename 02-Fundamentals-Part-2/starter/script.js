// //32, Strict Mode//
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;

//////////////////////////////////////////////////

// //33, Functions
// function logger() {
//   console.log("My name is Manami");
// }

// //calling, running , invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

////////////////////////////////////////////////////////////

// //34, Function Declararion vs Expression

// //Function Declaration
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }
// const age1 = calcAge1(1996);
// console.log(age1);

//Function Expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };
// const age2 = calcAge2(1996);
// console.log(age2);

////////////////////////////////////////////////////////////

// //35, Arroow Function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1996);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1996, "Manami"));
// console.log(yearsUntilRetirement(2000, "Tsuyoshi"));

////////////////////////////////////////////////////////////

//36, Functions calling other functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

/////////////////////////////////////////////////////
// //37, Reviewing Function

// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years.`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired.`);
//     return -1;
//   }

//   // return `${firstName} retires in ${retirement} years.`;
// };

// console.log(yearsUntilRetirement(1996, "Manami"));
// console.log(yearsUntilRetirement(1950, "Mike"));

////////////////////////////////////////////////////////////////

// //39, Introduction to Array
// const friend1 = "Micheal";
// const friend2 = "Steven";
// const friend3 = "Peter";
// //Instead of repeating, we use array

// const friends = ["Micheal", "Steven", "Peter"];
// console.log(friends); //[ 'Micheal', 'Steven', 'Peter' ]

// console.log(friends[0]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// //replace array element
// friends[2] = "Jay";
// console.log(friends); //[ 'Micheal', 'Steven', 'Jay' ]

// const firstName = "Manami";
// const manami = [firstName, "Batai", 2022 - 1996, "student", friends];
// console.log(manami);

// //Exercise
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3); //32 55 4

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages); //[32, 55, 4]

///////////////////////////////////////////////////////////////

// //40, Bacic Array Operations

// const friends = ["Micheal", "Steven", "Peter"];
// //Add elements
// friends.push("Jay"); //Arrayの最後に付け加える
// console.log(friends);

// friends.unshift("Jone"); //Arrayの最初に付け加える
// console.log(friends);

// //Remove elements
// const popped = friends.pop(); //Arrayの最後のエレメントを消す
// console.log(popped); //消されたエレメントが表示される
// console.log(friends);

// friends.shift(); //Arrayの最初のエレメントを消す
// console.log(friends);

// console.log(friends.indexOf("Steven")); //1
// //Arrayの何番目かを表示する

// console.log(friends.indexOf("Bob")); //-1
// //存在しないときは−１

// console.log(friends.includes("Steven")); //true
// //存在する場合はtrue

// console.log(friends.includes("Bob"));
// //存在しない場合はfalse

///////////////////////////////////////////////////////////
// // 42, Introduction to Objects
// const manami = {
//   firstName: "Manami",
//   lastName: "Batai",
//   age: 2022 - 1996,
//   job: "student",
//   friends: ["Micheal", "Steven", "Peter"],
// };
// console.log(manami); //全部出てくる
// console.log(manami.lastName); //Batai (lastNameだけ)
// console.log(manami["lastName"]); //Batai

// const nameKey = "Name";
// console.log(manami["first" + nameKey]);
// console.log(manami["last" + nameKey]);
// //[]の中にはなんでも入れられる

// const interestedIn = prompt(
//   "What do you want to know about Manami? Choose between firstName, lastName, age, job, and friends."
// );
//console.log(manami.interrestedIn);
//.はvariableの中にあるものしか指定できない。この場合、interestedInはmamamiの中にないからエラーになる。

// console.log(manami[interestedIn]);
// //prpmptなのでサイト上に出てくる

// if (manami[interestedIn]) {
//   console.log(manami.interestedIn);
// } else {
//   console.log("Wrong request");
// }

// manami.location = "Canada";
// manami["instagram"] = "@mnmbt96";
// console.log(manami);

// //Challenge
// //"Jonas has 3 friends, and best friend is called Micheal."

// const jonas = {
//   firstName: "Jonas",
//   friends: ["Micheal", "Alex", "Joe"],
// };
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}. `
// );

/////////////////////////////////////////////////////////////////

// //44, Object Methods
// const manami = {
//   firstName: "Manami",
//   lastName: "Batai",
//   birthYear: 1996,
//   job: "student",
//   friends: ["Micheal", "Steven", "Peter"],
//   hasDriversLicense: true,
// calcAge: function () {
//   return 2022 - this.birthYear;
// }
//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       this.job
//     }, and she has ${this.hasDriversLicense ? "a" : "no"} driver's license. `;
//   },
// };

// console.log(manami.calcAge());
// console.log(manami.age);
// console.log(manami.age);
// console.log(manami.age);

// // Challenge
//"Manami is a 26-year old student, and she has a drivers license."
// console.log(manami.getSummary());

/////////////////////////////////////////////////////////////////

// // 46, Iteration: The for loop
// //for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

////////////////////////////////////////////////////////////////
// //47, Looping Arrays, Breaking and Continuing

// const manamiArray = [
//   "Manami",
//   "Batai",
//   1996,
//   "student",
//   ["Micheal", "Steven", "Peter"],
// ];

// const types = [];

// for (let i = 0; i < manamiArray.length; i++) {
//   console.log(manamiArray[i]);
//   types.push(typeof manamiArray[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2022 - years[i]);
// }
// console.log(ages);

// //continue
// for (i = 0; i < manamiArray.length; i++) {
//   if (typeof manamiArray[i] !== "string") continue;
//   console.log(manamiArray[i]);
// }

// //break
// for (i = 0; i < manamiArray.length; i++) {
//   if (typeof manamiArray[i] === "number") break;
//   console.log(manamiArray[i]);
// }

/////////////////////////////////////////////////////
// // 48, Looping Backwards and Loop in Loop
// const manamiArray = [
//   "Manami",
//   "Batai",
//   1996,
//   "student",
//   ["Micheal", "Steven", "Peter"],
// ];

// // Loop Backwards 4,3,2,1,0
// for (let i = manamiArray.length - 1; i >= 0; i--) {
//   console.log(manamiArray[i]);
// }

// //Loop in Loop
// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight reputation ${rep}.`);
//   }
// }

////////////////////////////////////////////////////////
// //49, The while Loop
// for (let rep = 1; rep < 6; rep++) {
//   console.log(`Lifting weight reputation ${rep}.`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`WHILE: Lifting weight reputation ${rep}.`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}.`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end.");
// }
