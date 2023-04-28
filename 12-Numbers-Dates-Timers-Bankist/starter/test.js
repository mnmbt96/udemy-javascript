// //1
let students = [
  {
    name: 'John',
    score1: 47,
    score2: 46,
  },
  {
    name: 'Bob',
    score1: 23,
    score2: 24,
  },
  {
    name: 'Nice',
    score1: 40,
    score2: 35,
  },
  {
    name: 'Alex',
    score1: 44,
    score2: 45,
  },
];

//2
const degrees = ['A', 'B', 'C', 'D', 'E'];
const passsingLimits = [91, 81, 71, 61, 51];

//3
const caclTotalScore = function () {
  for (let i = 0; i < students.length; i++) {
    console.log(
      `${students[i].name}: ${students[i].score1 + students[i].score2}`
    );
  }
};
caclTotalScore();

// //4
// const isPassed = function () {
//   for (let i = 0; i < students.length; i++) {
//     students[i].scoreSum = students[i].score1 + students[i].score2;

//     for (let y = 0; y < passsingLimits; y++) {
//       if (students[i].scoreSum > passsingLimits[y]) {
//         return passsingLimits[y];
//       }
//     }
//   }
// };
// console.log(isPassed());
// // isPassed();
// console.log(students);
