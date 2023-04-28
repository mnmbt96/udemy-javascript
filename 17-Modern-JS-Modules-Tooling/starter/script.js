// 272. Exporting and Importing in ES6 Modules
// // Importing module

// ひとつずつ変数をインポート
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// ('./shoppingCart.js');
// addToCart('bread', 5);
// console.log(price, tq);

// 全部まとめてインポート
// import * as ShoppingCart from './ShoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// console.log('Importing module');

// // デフォルトインポート　名前のない関数にaddという名前をつけてインポート
// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apple', 4);
// console.log(cart); //配列に3つのオブジェクトとして表示させる

//インポートはコピーではない

// 悪い例
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// add('pizza', 2);

//////////////////////////////////////////////////////////////////
// 273. Top-Level await

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('End fetching');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   console.log(data);

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // //Not clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);

//////////////////////////////////////////////////////////////
// // 274. The Module Pattern
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(
//       `${quantity} ${product} added to cart (shipping cost ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     cart.push(product, quantity);
//     console.log(`${quantity} ${product} ordered from suplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shoppingCart); //undefined

///////////////////////////////////////////////////////////////////
// // 275. CommonJS Modules
// //Export
// export.addToCart = function (product, quantity) {
//   cart.push(product, quantity);
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost ${shippingCost})`
//   );
// };

// //Import
// const {addToCart} = require('./shoppingCart.js')

///////////////////////////////////////////////////////////////////
// 276. A Brief Introduction to the Command Line
// 277. Introduction to NPM

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from 'lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

////////////////////////////////////////////////////
// 279. Configuring Babel and Polyfilling
class Person {
  greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}
const manami = new Person('Manami');

console.log('Manami' ?? null);

// console.log(cart.find(el => el.quantity >= 2));

// import './core-js/stable';
// import './regenerator-runtime/runtime';

////////////////////////////////////////////////////
// 280. Review: Writing Clean and Mordern JavaScript
