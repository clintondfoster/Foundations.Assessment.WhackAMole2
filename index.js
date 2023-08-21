let score = 0;

//HTML elements
const scoreValue = document.getElementById('score');
const holes = document.querySelectorAll('.hole');
const gameContainer = document.getElementById('whack-a-mole');


//random number of moles is generated (1-5)
function getRandomMoles (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const randomNumMoles = getRandomMoles(1, 5);
console.log(randomNumMoles);


//each time a mole is clicked it moves to another hole, score increases by one
function moleWhacked (e) {
    const clickedMole = e.target;
    if (clickedMole.classList.contains('mole')) {
        score += 1;
        scoreValue.textContent = score;
        clickedMole.classList.remove('mole');
        // move mole to another hole
        placeMoles();
    }
}

//Event Listener for mole clicks
gameContainer.addEventListener("click", moleWhacked);


//how to get moles in holes
function placeMoles() {
    const emptyHoles = document.querySelectorAll('.hole:not(.mole)');
    if (emptyHoles.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyHoles.length);
        const randomEmptyHole = emptyHoles[randomIndex];
        randomEmptyHole.classList.add('mole');
    }
}

//start game

//interval timer
