'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const scores = [0, 0];
score0.textContent = scores[0];
score1.textContent = scores[1];
let currentScore = 0;
let activePlayer = 0;

dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${roll}.png`;
  dice.classList.remove('hidden');

  if (roll !== 1) {
    currentScore += roll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    console.log('you rolled a 1. switch player');
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }

  btnHold.addEventListener('click', function () {
    scores[`${activePlayer}`] += currentScore;
    score0.textContent = scores[0];
    score1.textContent = scores[1];
    console.log(scores[0]);
    console.log(scores[1]);
    console.log(scores[activePlayer]);

    if (scores[activePlayer] >= 20) {
      document
        .querySelector('.player--active')
        .classList.add('.player--winner');
      console.log('Game Over.  You won!');
    } else {
      document.getElementById(`current--${activePlayer}`).textContent = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;
      currentScore = 0;
      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
    }
  });
});

// btnHold.addEventListener('click', function () {
//   // scores[activePlayer] += currentScore;
//   scores[0] = 20;
//   currentScore = 10;
//   // if (scores[activePlayer] >= 100) {
//   //   console.log(`Player (${activePlayer}+1) wins!`);
//   //   player`${activePlayer}`.classList.add(`.player--winner`);
//   // } else {
//   //   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   //   activePlayer = activePlayer === 0 ? 1 : 0;
//   //   currentScore = 0;
//   //   player0.classList.toggle('player--active');
//   //   player1.classList.toggle('player--active');
//   // }
// });
