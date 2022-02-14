/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

/** 
 * Listens for click on #begin-game and calls startGame() on game object
 */
 const button = document.getElementById('btn__reset');
 button.addEventListener('click', function() {
     game.startGame();

 });

