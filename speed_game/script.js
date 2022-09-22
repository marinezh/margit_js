const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const stars = document.querySelectorAll("i");
let result = document.querySelector("#score");


// const overlay = 
// result.textContent = score
console.log(stars);

let score = 0
let active = 0;
let timer;
let pace = 1000
let rounds = 0 
const randomStar = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

stars.forEach((star, i) => {
  star.addEventListener("click", () => starsClicking(i));
});

const starsClicking = (i) => {
    console.log("clicked star:" + (i + 1));
    score++;
    result.textContent = score;
    if (i !== active) {
        endGame()
    } else {
        score++;
        rounds--;
        result.textContent = score;
    }
        
}

;

//   score.textContent = +score.textContent + 1;
//   console.log(score.textContent);

const startGame = () => {
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
};

const resetGame = () => {
  window.location.reload();
};

// function randomStar(stars) {
//     let random = Math.floor(Math.random() * stars.length + 1);
//     return random
// }

startButton.addEventListener("click", startGame);
stopButton.addEventListener("click", endGame);
// stopButton.addEventListener('click', starsClicking)
// figured out which button is clicked
