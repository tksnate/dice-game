'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');

const scores = [0, 0];
score0.textContent = 0;
score1.textContent = 0;
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
    player1.classList.toggle('player--active');
    player2.classList.toggle('player--active');
  }
});
