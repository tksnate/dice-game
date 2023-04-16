'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
// const current0 = document.querySelector('.current--0');
// const current1= document.querySelector('.current--1');

score0.textContent = 0;
score1.textContent = 0;
let current0 = 0;
let current1 = 0;

dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  const roll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${roll}.png`;
  dice.classList.remove('hidden');

  if (roll === 1) {
    console.log('you rolled a 1. switch player');
  } else if (roll > 1) {
    current0 = current0 + roll;
    console.log(current0);
  }
});
