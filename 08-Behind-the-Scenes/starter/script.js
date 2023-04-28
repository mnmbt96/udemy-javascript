'use strict';

/*   99. Primitive vs. Reference values  */
let age = 30;
let oldAge = age;
age = 31;
// console.log(age); //31
// console.log(oldAge); //30

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;

// console.log('Friend: ', friend); //Friend:  { name: 'Jonas', age: 27 }
// console.log('Me: ', me); //Me:  { name: 'Jonas', age: 27 }

/*   100. Primitives vs. Objects in Practice */

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName); //Davis Williams

//Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marregedJessica = jessica;
marregedJessica.lastName = 'Davis';
//console.log('Before marrrige: ', jessica); //{ firstName: 'jessica', lastName: 'Davis', age: 27 }
// console.log('After marrige: ', marregedJessica); // { firstName: 'jessica', lastName: 'Davis', age: 27 }

//marregedJessica = {};

//Coping object
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
//console.log('Before marrrige: ', jessica2); //{ firstName: 'jessica', lastName: 'Williams', age: 27 }
//console.log('After marrige: ', jessicaCopy); //{ firstName: 'jessica', lastName: 'Davis', age: 27 }

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marrrige: ', jessica2);
console.log('After marrige: ', jessicaCopy);
