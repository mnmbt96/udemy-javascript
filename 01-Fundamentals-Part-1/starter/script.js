// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log(23);

// //Declaration of variable//
// let firstName = "Jonas";
// console.log(firstName);

// //Assignment Values and Variables//
// let country = "Japan";
// let continent = "Eurasia";
// let population = "100million";

// console.log(country); //Japan
// console.log(continent); //Eurasia
// console.log(population); //100million

// //Boolean//
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun); //true

// console.log(typeof true); //boolean
// console.log(typeof javaScriptIsFun); //boolean
// console.log(typeof 23); //number
// console.log(typeof "manami"); //string

// javaScriptIsFun = "YES";
// console.log(typeof javaScriptIsFun); //string
// //Dynamic//

// let year;
// console.log(year); //undefined
// console.log(typeof year); //undefined

// year = 1991;
// console.log(typeof year); //mumber

// console.log(typeof null);

// let age = 30;
// //reassignable//
// age = 31;
// console.log(age);

// const birthYear = 1996;
// // birthYear = 1990; //cannot be reassigned

// // const job:

// var job = "programmer";
// job = "teacher";

//Math operators//
// const now = 2037;
// const ageManami = now - 1996;
// const ageSarah = now - 2018;
// console.log(ageManami, ageSarah);

// console.log(ageManami * 2, ageManami / 2 ** 3);
// //2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = "Manami";
// const lastName = "Batai";
// console.log(firstName + " " + lastName);

// //Assiginment operators//
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 4 =100
// x++; // x = x + 1 =101
// x--; // x = x - 1 = 100
// console.log(x);

// //Comparison operators//
// console.log(ageManami > ageSarah); //<,>,<=,>=
// console.log(ageSarah >= 18);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y); //10 10

// const averageAge = (ageManami + ageSarah) / 2;
// console.log(ageManami, ageSarah, averageAge);

////Strings and Temple Literals
// const firstName = "Manami";
// const job = "student";
// const birthYear = 1996;
// const year = 2037;
// const manami =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(manami);

// const manamiNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(manamiNew);

// console.log(`String with \n\
// multiple \n\
// lines`);

// console.log(`String
// multiple
// line`);

////if else statemants
// const age = 15;
// const isOldEnough = age >= 18;

// if (age >= 18) {
//   console.log("Sarah can start driving license🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// let century;
// const birthYear = 1991;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// //20, type of conversion and coercion
// //Type Conversion
// const inputYear = "1996"; //""がついているからstring
// console.log(Number(inputYear) + 18); //2014//Numberにするファンクション
// console.log(inputYear + 18); // 199618

// console.log(String(23)); //数字でもStringにできる

// //Type Coersion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3); //10 //符号が-なので数字扱い
// console.log("23" * "2"); //46

// let n = "1" + "1";
// n = n - 1;
// console.log(n);

//21,truthy and falsy values
//five falsy values : 0, '', undefined, null NaN
//上記以外はtruthy values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Manami"));
// console.log(Boolean({}));

// const money = 0;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("You should get a job!");
// }
//You should get a job!
//0はfalsy valueだから、elseが反映される

////Equality Operators: === vs ==
// const age = "18";
// if (age === 18) console.log("You just became an adult!(strict)");
// //{}はいらない

// if (age == 18) console.log("You just became an adult(loose)");

//AVOID loose equality!!

////Example of ==
// const favorite = prompt("What's your favorite number?");
// console.log(favorite); //画面上にpopupが出てくるので数字を入力
// console.log(typeof favorite); //string

// //23はstringだから、==を使う
// if (favorite == 23) {
//   //"23" == 23
//   console.log("23 is an amazing number!");
// }

////Example of ===
// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite); //number

// //23はnumberだから、===を使う
// if (favorite === 23) {
//   //23 === 23
//   console.log("23 is an amazing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number!");
// } else {
//   console.log("Number is not 23 or 7");
// }

// //24,Logical operators
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// //Both A and B is true, then true &&
// console.log(hasDriversLicense && hasGoodVision);

// //Either A or B is true, then true ||
// console.log(hasDriversLicense || hasGoodVision);

// //A is not true !
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

// const isTired = true; //C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive");
// }

//26,the switch statement

const day = "saturday";

switch (day) {
  case "monday":
    console.log("Go to school");
    break;
  case "tuesday":
    console.log("Study with friends");
    break;
  case "wednesday":
    console.log("Study on Udemy");
    break;
  case "thursday":
  case "friday":
    console.log("Study English");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a day");
}

//switchはifでも同じことが書ける。好みにもよるがifの方が使われている。
if (day === "monday") {
  console.log("Go to school");
} else if (day === "tuesday") {
  console.log("Study with friends");
} else if (day === "wednesday") {
  console.log("Study on Udemy");
} else if (day === "thursday" || day === "friday") {
  console.log("Study English");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a day");
}

///////////////////////////////////////////////////////////

//28, The conditional(Tarnal) operator
const age = 23;
age >= 18
  ? console.log("I like to drink wine!")
  : console.log("I like drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink);
console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
