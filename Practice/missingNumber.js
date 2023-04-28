/*
Find the missing number in a given integer array of 1 to 12
const arr = [1,2,3,4,6,7,8,9,10,11,12]
console.log(findMissingNum(arr)); // Returns 5 the missing number
So, please write a function findMissingNum and it will return the missing number.
*/

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
function findMissingNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i] - i - 1;
    if (num !== 0) {
      return arr[i] - 1;
    }
  }
}
console.log(findMissingNum(arr));
