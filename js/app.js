/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();

/**
 * Listens for click on #begin-game and calls startGame() on game object
 */
const startBtn = document.getElementById("btn__reset");
startBtn.addEventListener("click", () => {
  game.startGame();
});

/**
 * Listens for key button clicks
 */
document.getElementById("qwerty").addEventListener("click", (e) => {
  const button = e.target;
  if (button.tagName === "BUTTON") {
    game.handleInteraction(button);
  }
});
