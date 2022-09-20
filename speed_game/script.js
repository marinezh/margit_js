const startButton = document.querySelector('#start')
const stopButton = document.querySelector('#stop')
const stars = document.querySelectorAll('i')

console.log(stars);




const startGame = () => {
    console.log(startButton);
}

const endGame = () => {
    console.log(stopButton);
}

startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', endGame)

// figured out which button is clicked