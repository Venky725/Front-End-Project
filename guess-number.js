'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  let x = Number(document.querySelector('.guess').value);
  if (!x) {
    document.querySelector('.message').textContent = 'No number';
  } else if (x === number) {
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Correct guess...';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '300px';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (x !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        x >= number ? 'Too high...' : 'Too Low...';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Wrong guess...';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'guess the number...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '150px';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ' ';
});
