// define our first variable
// when someone clicks on the red circle, we want the background to turn red


// define our first variable, the red circle
let redCircle = document.querySelector(".red-circle");

// what happens when someone interacts with the red circle
function turnRed() {
   document.body.style.background = "red";
}

// add an event listener
// when someone clicks on the red circle, change the background red

redCircle.addEventListener("click", turnRed);



// define our first variable, the red circle
let blueCircle = document.querySelector(".blue-circle");

// what happens when someone interacts with the red circle
function turnBlue() {
   document.body.style.background = "blue";
}

// add an event listener
// when someone clicks on the red circle, change the background red

blueCircle.addEventListener("click", turnBlue);


// define our first variable, the red circle
let yellowCircle = document.querySelector(".yellow-circle");

// what happens when someone interacts with the red circle
function turnYellow() {
   document.body.style.background = "yellow";
}

// add an event listener
// when someone clicks on the red circle, change the background red

yellowCircle.addEventListener("click", turnYellow);