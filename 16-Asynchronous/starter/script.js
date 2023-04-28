'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
//246. Asynchronous JavaScript, AJAX and APIs

//Old way: XML
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//         <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data['languages'][0]}</p>
//             <p class="country__row"><span>💰</span>${data['currencies'][0]}</p>
//           </div>
//         </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('japan');
// getCountryData('usa');
// getCountryData('canada');

//Google public APIs
//FInd what you want to use
//API Endpoints

////////////////////////////////////////////////////
//250. Welcome to Callback Hell

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
// `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   //AJEX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     // console.log(data);

//     //Render Country 1
//     renderCountry(data);

//     //Get Neighbour country(2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJEX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();
//     console.log(request2);

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       // console.log(this.responseText);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('japan');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('canada');

///////////////////////////////////////////////////////
//251. Promises and the Fetch API
//253. Chaining Promises
//254. Handling Rejected Promises
//255. Throwing Errors Manually

//Promiseがrequestに保存された
//将来の値を保存する
// const request = fetch(`https://restcountries.com/v3.1/name/japan`);
// console.log(request);

///////////////////////////////////////////////////////
//252. Consuming Promises
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);

//     //意図的にエラーを設定し、catchに渡す
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //Country1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //Country2
//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Country not found!'
//       );
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       //throwから受け取ったエラーメッセージを表示させる
//       renderError(`Something went wrong. ${err.message}. Try Again! `);
//       console.error(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       //promiseがfulfillでもrejectでも実行する処理をfinallyの中に入力
//       countriesContainer.style.opacity = 1;
//     });
// };

//参考
// const getCountryData = function (country) {
//   //Country1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       //意図的にエラーを設定し、catchに渡す
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       console.log(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       //Country2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       //throwから受け取ったエラーメッセージを表示させる
//       renderError(`Something went wrong. ${err.message}. Try Again! `);
//       console.error(`Something went wrong ${err.message}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// getCountryData('canada');
// getCountryData('japan');
// getCountryData('germany');

// btn.addEventListener('click', function () {
//   getCountryData('japan');
// });

// getCountryData('ajdhffsflsksr');

/////////////////////////////////////////////////////
//258. The Event Loop in Practice
// console.log('Test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });
// console.log('Test end');
// 結果
/*
Test start
Test end
Resolved promise 1
Resolved promise 2
0 sec timer
*/

/////////////////////////////////////////////////////
//259. Building a Simple Promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💰');
//     } else {
//       reject(new Error('You lost your monry 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// //Promiseifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 second passed'));
//結果
/*
I waited for 2 seconds
I waited for 1 second
*/

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem')).catch(x => console.log(x));

////////////////////////////////////////////////////////////
// //260. Promisifying the Geolocation API

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v2/name/${data.country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found(${res.status})`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch(error => console.log(`Something went wrong! ${error.message}`));
// };

// btn.addEventListener('click', whereAmI);

///////////////////////////////////////////////////
//262. Consuming Promises with Async/Await
//263. Error Handling with try and catch
//264. Returning Values from Async Functions
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const res = await fetch(`https://restcountries.com/v2/name/${country}`).then(
//   res => console.log(res)
// );

// const whereAmI = async function () {
//   try {
//     //Geo Location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;

//     //Reverse geolocation
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     //Country Data
//     //下のコードと全く同じ処理
//     //Await for the result until the promise is fulfilled
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting location data');

//     const data = await res.json();
//     renderCountry(data[0]);

//     return `You are in ${dataGeo.city}, ${dataGeo.country}}`;
//   } catch (err) {
//     renderError(`💥 ${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// };
// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);
// // whereAmI()
// //   .then(city => console.log(`2: ${city}`))
// //   .catch(err => console.error(`2: ${err.message}`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch (err) {
//     console.error(`2: ${err.message}`);
//   }
//   console.log('3: Finished getting location');
// })();

//////////////////////////////////////////////////////////////
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

//////////////////////////////////////////////////////////////
// //265. Running Promises in Parallel
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    //意図的にエラーを設定し、catchに渡す
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);

    return response.json();
  });
};

// //同時にいくつかのオペレーションを実行するとき
// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //ひとつずつ実行される
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     // console.log(data1.capital, data2.capital, data3.capital);

//     //同時
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);
//     // console.log(data);
//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('canada', 'japan', 'korea');

///////////////////////////////////////////////////////////////////
//266. Other Promise Combinators: race, allSettled and ...

//Promise.race
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long!'));
    }, s);
  });
};
Promise.race([
  getJSON(`https://restcountries.com/v2/name/mexico`),
  timeout(1000),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promise.allSettled
Promise.allSettled([
  Promise.resolve('Seccess'),
  Promise.reject('Error'),
  Promise.resolve('Another Seccess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any[ES2021]
Promise.any([
  Promise.resolve('Seccess'),
  Promise.reject('Error'),
  Promise.resolve('Another Seccess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
