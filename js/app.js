/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

/** 
 * Listens for click on #begin-game and calls startGame() on game object
 */
 const startBtn = document.getElementById('btn__reset');
 startBtn.addEventListener('click', function() {
     game.startGame();

 });


const keyboard = document.querySelectorAll('.key');
keyboard.forEach(button => {
    button.addEventListener('click', event => {
        game.handleInteraction(button);
    })
});