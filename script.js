'use strict';
// document.querySelector('.guess').value = 24;

let secreteNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    //console.log(score);


    if (!guess) {
        // document.querySelector('.message').textContent = 'No Number😢'
        displayMessage('No Number');
        //when there is no input
    } else if (guess == secreteNumber) {
        //document.querySelector('.message').textContent = 'Correct Number ! 😍';
        displayMessage('Correct Number');
        document.querySelector('.number').textContent = secreteNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem'

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when player wins

    } else if (guess !== secreteNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secreteNumber ? 'Too High' : 'Too low';
            displayMessage(guess > secreteNumber ? 'Too high' : 'Too low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            //document.querySelector('.message').textContent = 'You lost the game';
            displayMessage('You lost the game');
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secreteNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.guess').value = null;
    document.querySelector('.number').textContent = '?';
    //document.querySelector('.message').textContent = 'Start guessing...'
    displayMessage('Start guessing...');
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.score').textContent = score;
});

