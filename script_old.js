'use strict';
//Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const scoreEl01 = document.querySelector('#score--0');
const scoreEl02 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

let currentScore = 0;
let totalScores = [0, 0];
let activePlayer = 0;
let playing = true;

//Starting conditions
const init = function () {
  currentScore = 0;
  totalScores = [0, 0];
  activePlayer = 0;
  playing = true;

  scoreEl01.textContent = 0;
  scoreEl02.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const playGame = function () {
  if (playing) {
    //generate randome dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //display dice roll
    /* if (diceEl.classList.contains('hidden')) {
    diceEl.classList.remove('hidden');
  }*/

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //check to see if it is a '1'
    //display new score
    ///if 1, display score of 0.
    /////////STILL NEED TO SWITCH PLAYER

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};

function holdScore() {
  if (playing) {
    //Add current score to active player's score
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      totalScores[activePlayer];

    //check if current player's score is > 100.  If YES, finish game. If NO switch players

    if (totalScores[activePlayer] >= 100) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
}

btnRoll.addEventListener('click', playGame);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', init);
