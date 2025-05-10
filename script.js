const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
const moles = document.querySelectorAll('.mole');
var timer = document.getElementById('timer');
let score = 0;
let timeLeft = 15; 
let countdownInterval;

// hide all moles
moles.forEach((mole) => {
  mole.style.display = 'none';
});

// Start the game
startButton.addEventListener('click', () => {
  startButton.disabled = true; // Disable the button during the game
  resetGame();
  startCountdown();
  showRandomMole();
});

// Reset the game
function resetGame() {
  score = 0;
  timeLeft = 15;
  scoreDisplay.textContent = score;
}

// Countdown timer
function startCountdown() {
  document.getElementById('pop').style.display = 'none';
  document.getElementById('pop').classList.remove('scoreboard');
  moles.forEach((mole) => {
    mole.style.display = 'block';
  });
  countdownInterval = setInterval(() => {
    
    timer.innerHTML = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdownInterval);
      endGame();
    } else {
      timeLeft--;
    }
  }, 1000);
}

// End the game
function endGame() {
  startButton.disabled = false; // Re-enable the start button
  moles.forEach((mole) => {
    // mole.style.animationPlayState = 'pasued';
    mole.style.display = 'none';
    mole.removeEventListener('click', hitMole);
  });
  // alert('Time’s up! Final Score: ' + score);
  document.getElementById('pop').style.display = 'block';
  document.getElementById('pop').classList.add('scoreboard');
  document.getElementById('pop').innerHTML = 'Time’s up! Final Score: ' + score;
}

// Show a random mole
function showRandomMole() {
  moles.forEach((mole) => {
    mole.style.animationPlayState = 'running'; // Start mole animation
    mole.addEventListener('click', hitMole);
  });
}

// Hit a mole
function hitMole(event) {
  score++;
  scoreDisplay.textContent = score;
}

