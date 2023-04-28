'use strict';

//206. What is Object Oriented Programing
//207. OOP in JavaScript

// //208. Object Oriented Programming With JavaScript
// const Person = function (firstName, birthYear) {
//   //Instance Properties
//   //this keyword is an emptiy object
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //Never Do this! Use prototype
//   // this.calcAge = function(){
//   //   console.log(2037 - this.birthYear);
//   // }
// };

// const manami = new Person('Manami', 1996);
// // console.log(manami); //Person { firstName: 'Manami', birthYear: 1996 }

// //1. New{} is created
// //2. function is called, this= {}
// //3. {} linked to prototype
// //4. function automatically return {}

// const aya = new Person('Aya', 1994);
// const kanako = new Person('Kanako', 2000);
// // console.log(aya, kanako);

///////////////////////////////////////////////
// // 209. Prototypes
// console.log(Person.prototype);
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// manami.calcAge(); //41
// aya.calcAge(); //43
// kanako.calcAge(); //37

// // console.log(manami.__proto__); //{ calcAge: [Function (anonymous)] }
// console.log(manami.__proto__ === Person.prototype); //true

// console.log(Person.prototype.isPrototypeOf(manami)); //true
// console.log(Person.prototype.isPrototypeOf(Person)); //false

// Person.prototype.species = 'Homo Sapiens';
// console.log(manami.species); //Homo Sapiens

// //Object.prototype
// console.log(manami.__proto__); ///{ calcAge: [Function (anonymous)], species: 'Homo Sapiens' }
// console.log(manami.__proto__.__proto__); //[Object: null prototype] {}
// console.log(manami.__proto__.__proto__.__proto__); //null

// const arr = [3, 4, 5, 6, 4, 3, 2, 3, 4];
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique()); //[ 3, 4, 5, 6, 2 ]

//////////////////////////////////////////////////////////////////
// 213. ES6

// class expression
// const personCl = {};

// //class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //Instance Method
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }

//Set a propaty that already exists
// set fullName(name) {
//   console.log(name);
//   if (name.includes(' ')) this._fullName = name;
//   else alert(`${name} is not a full name`);
// }
// get fullName() {
//   return this._fullName;
// }

// //Static Method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// const manami = new PersonCl('Manami', 1996);
// console.log(manami); //PersonCl { firstName: 'Manami', birthYear: 1996 }
// manami.calcAge(); //27
// console.log(manami.age); //27

// console.log(manami.__proto__ === PersonCl.prototype); //true

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// manami.greet();

// const walter = new PersonCl('Walter', 1995);
// walter.greet();

//1. Classes are NOT hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode

///////////////////////////////////////////////////////////////////
// //214. Setters and Getters
// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest); //300
// account.latest = 50;
// console.log(account.movements); //[ 200, 530, 120, 300, 50 ]

/////////////////////////////////////////////////////////////
//215. Static Methods
// Person.hey = function () {
//   console.log('Hey there!');
// };
// Person.hey();
// PersonCl.hey(); //Hey there! [class PersonCl]

////////////////////////////////////////////////////////////
// //216. Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = 'Steven';
// steven.birthYear = 2000;
// steven.calcAge();

// console.log(steven.__proto__); //{ calcAge: [Function: calcAge], init: [Function: init] }

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1967);
// sarah.calcAge(); //70

//////////////////////////////////////////////////
// //218. Inheritance Between "Classes": Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Student.prototype = Object.create(Person.prototype)
// Student.prototype = Person.prototype;

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };
// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();

////////////////////////////////////////////////////////////////
// //220. Inheritance Between "Classes": ES6 Classes
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
//   //Instance Method
//   //Methods will be added to .prototype property
//   calcAge() {
//     console.log(2023 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2023 - this.birthYear;
//   }

//   //Set a propaty that already exists
//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   //Static Method
//   static hey() {
//     console.log('Hey there!');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //Always needs to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce = function () {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   };
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

//////////////////////////////////////////////////////////////////
//221. Inheritance Between "Classes": Ojbect.create
//コンストラクターやプロトタイプオブジェクトについて考える必要がない。
//フェイククラスを作らなくてもいい。
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

/////////////////////////////////////////////////////////////////////
//222. Another Class Example
//223. Encupsulation: Protected Properties and Methods
//224. Encupsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
//(There is static version)

class Account {
  //Public fields (instances)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected Property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //Public Methods
  //Public Interface
  getMethods() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
    }
    return this;
  }

  static helper() {}

  // Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);
acc1.deposit(250);
acc1.withdraw(140);
// acc1.#approveLoan(1000);
acc1.requestLoan(1000);
console.log(acc1);
Account.helper();

////////////////////////////////////////////////////////////////////
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

///////////////////////////////////////////////////////////////////
