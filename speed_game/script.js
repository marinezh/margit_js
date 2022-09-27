const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const stars = document.querySelectorAll("i");
let score = document.querySelector("#score");
let finalScore = document.querySelector('#final_score');
const resultAnswer = document.querySelector("#result")
const modalClose = document.querySelector('.close');
const modal = document.querySelector('.overlay');

let countScore = 0
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

// func from w3school random number
const randomStar = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// const starsClicking = (i) => {
//   console.log('clicked star' + i);
//   if (i == active) {
//     countScore++;
//     rounds--;
//     score.textContent = countScore;
//   } else {
//     endGame();
//   }
// }

const starsClicking = (i) => {
  console.log('clicked star' + i);
  if (stars[i].classList.contains("active") == true) {
    const audio = new Audio('assets/stars_clicking_sound.ogg')
    audio.play()
    countScore++;
    rounds--;
    score.textContent = countScore;
  } else {
    endGame();
  }
}

stars.forEach((star, i) => {
  star.addEventListener("click", () => starsClicking(i));
});

const startGame = () => {

  stars.forEach(star => star.style.pointerEvents = 'auto');


  startButton.classList.add('hidden');
  stopButton.classList.remove('hidden')
  if (rounds > 3) {
    return endGame();
  } else {
    stars.forEach(star => {
      star.classList.remove("active")
    })


  }


  let nextActive = pickNew(active);

  stars[nextActive].classList.add("active");
  stars[active].classList.remove("active");

  active = nextActive;
  console.log("curent star is", active);
  timer = setTimeout(startGame, pace);
  pace = pace - 10;

  // make new star highlighted
  function pickNew(active) {
    let nextActive = randomStar(0, 4);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    };
  };

};

const endGame = () => {
  // overlay.style.visibility = 'visible';
  const audio3 = new Audio("assets/game_over.wav");
  console.log("game ended");
  clearTimeout(timer);
  modal.classList.remove('hidden');
  finalScore.textContent = countScore;

  if (countScore == 0) {
    resultAnswer.textContent = "Upps, try again!"
  } else if (countScore > 0 && countScore < 15) {
    resultAnswer.textContent = `Only ${countScore}, not enought for dreams come true, try better next time!`
  } else if (countScore > 15) {
    resultAnswer.textContent = `Well done, you caught ${countScore} your wish will come true soon!`
  }
  audio3.play();
  stopButton.classList.add('hidden')
  startButton.classList.remove('hidden')

};


const resetGame = () => {
  window.location.reload();
};


// Closing of modal window function
const modulCloseFunc = () => {
  console.log('modalclose');
  modal.classList.add('hidden');
  resetGame()

}

modalClose.addEventListener('click', modulCloseFunc);
startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);



