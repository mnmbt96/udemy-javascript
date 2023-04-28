// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const x = 23;

// 59, problem solving
const temp = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function tempAmplitude(temp) {
  let max = temp[0];
  let min = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (typeof temp[i] !== "number") continue;
    if (temp[i] > max) max = temp[i];
    if (temp[i] < min) min = temp[i];
  }
  console.log(max, min);
  console.log(max - min);
}
tempAmplitude(temp);
