// function play(){
// //   step-1 hide the home screen. To hide the screen add the class hidden to the home section
// const homeSection = document.getElementById('home-screen');
// homeSection.classList.add('hidden');
// // console.log(homeSection)

// // Show the playground
// const playgroundSection = document.getElementById('play-ground');
// // console.log(playgroundSection.classList)
// playgroundSection.classList.remove('hidden');

// }
function handleKeyboardkeyupEvent(event){
    const playerPressed = event.key;
// console.log('player pressed', playerPressed );

// get the expected to  press
const currentAlphabetElement = document.getElementById('current-alphabet');
const currentAlphabet = currentAlphabetElement.innerText;
const expectedAlphabet = currentAlphabet.toLowerCase();
// console.log(playerPressed, expectedAlphabet);

// Check matched or not
if(playerPressed === expectedAlphabet){
    console.log('you get a point');

    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);



    // -------------------------------

    // Update Score:
    // 1. Get the current score
// const currentScoreElement = document.getElementById('current-score');
// const currentScoreText = currentScoreElement.innerText;
// const currentScore = parseInt(currentScoreText);
// console.log(currentScore);

//     // 2. Increase the score by 1
    const newScore = currentScore + 1;
//     // 3. Show the update score
//     currentScoreElement.innerText = newScore;

    // console.log('you have pressed correctly', expectedAlphabet);

    // Start A new round
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you missed. You lost a life')

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);
    
    if(updatedLife === 0){
        gameOver();
    }


    // ----------------------------
    // step-1. get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //  step-2. reduce the life count
    // const newLife = currentLife - 1;
    // // step-3. display the updated life count
    // currentLifeElement.innerText = newLife;

}
}
// capture keyboard kye press
document.addEventListener('keyup',  handleKeyboardkeyupEvent);

function continueGame(){
    // step-1 Generate a random alphabet
const alphabet = getARandomAlphabet();
// console.log('Your Random alphabet', alphabet);

// set randomly generated to the screen (sHOW IT)
const currentAlphabetElement = document.getElementById('current-alphabet');
currentAlphabetElement.innerText = alphabet;

// set background color
setBackgroundColorById(alphabet);
}


function play(){
    // hide everything show only playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame()

    // reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
}

    function gameOver(){
        hideElementById('play-ground');
        showElementById('final-score');

        // update final score
        // step-1: get the final score
        const lastScore = getTextElementValueById('current-score');
        console.log(lastScore);
        setTextElementValueById('last-score', lastScore);

    }
