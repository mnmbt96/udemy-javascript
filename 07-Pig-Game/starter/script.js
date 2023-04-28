'use strict';

//Button
let btnNewGame = document.querySelector('.btn--new');
let btnRollDice = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');

//Total score
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');

//Current score
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');

//Player
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');

//Dice element
let dicePic = document.querySelector('.dice');

//Start
//No dice picture
//Score = 0, current score = 0
//Player 1 is supposed to an active player
//No one has winner's effect

let scores, currentScore, activePlayer, winnerplayer, nowPlaying;

let init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0; //first player
  winnerplayer = 0;
  nowPlaying = true;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  dicePic.classList.add('hidden');
};
init();

let switchPlayer = function () {
  //activePlayerのcurrectScoreを０にする
  document.getElementById(`current--${activePlayer}`).textContent = 0;

  //currentScoreをリセットする。
  //これがないと交代したときに、今のスコアが次のplayerに引き継がれてしまう。
  currentScore = 0;

  //交代。activePlayerが０だったら、１にする。
  if (activePlayer === 0) {
    activePlayer = 1;
    //1だったら０にする。
  } else {
    activePlayer = 0;
  }
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRollDice.addEventListener('click', function () {
  if (nowPlaying) {
    let dice = Math.trunc(Math.random() * 6) + 1;

    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${dice}.png`;

    //1が出た時
    if (dice === 1) {
      switchPlayer();

      //1以外が出ている時
    } else {
      //currentScoreにサイコロの数字を足していく
      currentScore += dice;
      //activePlayerが０の時はplayer１、１の時はplayer2のcurrentScore
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHold.addEventListener('click', function () {
  if (nowPlaying) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      nowPlaying = false;
      dicePic.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', function () {
  init();
});
