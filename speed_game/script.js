const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const stars = document.querySelectorAll("i");
let result = document.querySelector("#score"); 
// сменить название переменной result
let finalScore = document.querySelector('#final_score');
const modalClose = document.querySelector('.close');
const modal = document.querySelector('.overlay');

console.log(modalClose);
console.log(modal);


// const overlay = 
// result.textContent = score
console.log(stars);

let score = 0
let active = 0;
let timer;
let pace = 1000;
let rounds = 0;

const randomStar = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

stars.forEach((star, i) => {
  star.addEventListener("click", () => starsClicking(i));
});

const starsClicking = (i) => {

    if (i !== active) {
        endGame()
    } else {
        score++;
        rounds--;
        result.textContent = score;
    }  
}
//   score.textContent = +score.textContent + 1;
//   console.log(score.textContent);

const startGame = () => {
  stars.forEach(star => star.style.pointerEvents = 'auto');
    if (rounds > 3) {
    return endGame
}

  let nextActive = pickNew(active);

  stars[nextActive].classList.toggle("active");
  stars[active].classList.remove("active");

  active = nextActive;
  console.log("curent star is", active);
    timer = setTimeout(startGame, 1000);
    pace = pace - 10;

  function pickNew(active) {
    // let nextActive = randomStar(stars)
      let nextActive = randomStar(0, 4);

    if (nextActive != active) {
      return nextActive;
    } else {
      return pickNew(active);
    }
  }

};

const endGame = () => {
  // overlay.style.visibility = 'visible';
  console.log("game ended");
  clearTimeout(timer);
  modal.classList.remove('hidden');


  finalScore.textContent = score;
};

const resetGame = () => {
  window.location.reload();
};


// Closing of modal window function
const modulCloseFunc = () => {
  console.log('modalclose');
  modal.classList.add('hidden');
  
}

modalClose.addEventListener('click', modulCloseFunc);
startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
// stopButton.addEventListener('click', starsClicking)
// figured out which button is clicked


