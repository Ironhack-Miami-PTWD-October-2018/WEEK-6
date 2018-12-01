const myCanvas = document.querySelector(".my-floppy");
const ctx = myCanvas.getContext("2d");

// the game constructor function
const Game = function(){
    this.floppy = {};
    this.obstacles = [];
}

// floppy bird constructor function:
const Floppy = function(){
    this.x = 0;
    this.y = 220;
    this.width = 100;
    this.height = 100;
    this.image = 'images/floppy.png'
}


// function Game (){
// }
let currentGame;
let currentFloppy;

function startGame(){
    currentGame = new Game();
    // console.log(" = = = = ",currentGame);
    currentFloppy = new Floppy();
    currentGame.floppy = currentFloppy;
}

startGame();