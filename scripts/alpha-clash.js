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

function play(){
    hideElementById('home-screen')
    showElementById('play-ground');
}