'use strict';
/* ----- Coding Challenge #2 -----*/
/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1. Loop over the game.scored array and print each player name to the console,
//along with the goal number (Example: "Goal 1: Lewandowski")
for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

for (let [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`);
}

//2. Use a loop to calculate the average odd and log it to the console
//(We already studied how to calculate averages, you can go check if you don't remember)
const oddValues = Object.values(game.odds);
// console.log(oddValues);
// let sum = 0;
let average = 0;
// for (let i = 0; i < oddValues.length; i++) {
//   sum += oddValues[i];
// }
// average = sum / oddValues.length;
// console.log(average); //3.6933333333333334

for (const odd of oddValues) {
  average += odd;
}
average /= oddValues.length;
console.log(average);

//3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
//Odd of victory Bayern Munich: 1.33
//Odd of draw: 3.25
//Odd of victory Borrussia Dortmund: 6.5
//Get the team names directly from the game object, don't hardcode them (except for "draw").
//Hint: Note how the odds and the game objects have the same property names 😉

// let team1Name = Object.keys(game.odds)[0];
// team1Name = game.team1;

// let team2Name = Object.keys(game.odds)[2];
// team2Name = game.team2;
// // console.log(team1Name);

// console.log(`Odd of victory ${team1Name}: ${oddValues[0]}`);
// console.log(`Odd of draw: ${oddValues[1]}`);
// console.log(`Odd of victory ${team2Name}: ${oddValues[2]}`);

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  let teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

//4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties,
//and the number of goals as the value. In this game, it will look like this:
//{
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

const scores = {
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2,
};
