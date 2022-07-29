/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = this.createPhrases();
    this.activePhrase = null;
  }

  /**
   * Creates phrases for use in game
   * @return {array} An array of phrases that could be used in the game */
  createPhrases() {
    const phrases = [
      new Phrase("my precious"),
      new Phrase("there is no trying"),
      new Phrase("may the force be with you"),
      new Phrase("rosebud"),
      new Phrase("you talking to me"),
      new Phrase("you are my sunshine"),
      new Phrase("we are not in kansas anymore"),
      new Phrase("show me the money"),
      new Phrase("to infinity and beyond"),
    ];
    return phrases;
  }

  /**
   * Selects random phrase from phrases property
   * @return {Object} Phrase object chosen to be used
   */
  getRandomPhrase() {
    let randomNumber = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNumber];
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    document.getElementById("overlay").style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   * Handles onscreen keyboard button clicks
   * @param (HTMLButtonElement) button - The clicked button element
   */
  handleInteraction(button) {
    button.disabled = true;

    if (this.activePhrase.checkLetter(button.innerHTML)) {
      this.activePhrase.showMatchedLetter(button.innerHTML);
      button.classList.add("chosen");
      if (this.checkForWin() === true) {
        this.gameOver(true);
      }
    } else {
      button.classList.add("wrong");
      this.removeLife();
    }
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    const letter = document.querySelectorAll(".letter");
    const show = document.querySelectorAll(".show");
    if (letter.length === show.length) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    const lives = document.querySelectorAll(".tries img");

    lives[this.missed].src = "images/lostHeart.png";
    this.missed += 1;

    if (this.missed > 4) {
      this.gameOver(false);
      this.resetGame();
    }
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    document.getElementById("overlay").style.display = "";

    if (gameWon === false) {
      document.getElementById("overlay").classList.replace("start", "lose");
      document.getElementById("game-over-message").innerHTML =
        "Game Over. Try again.";
    } else {
      document.getElementById("overlay").classList.replace("start", "win");
      document.getElementById("game-over-message").innerHTML =
        "You Won! Awesome.";
    }
    this.resetGame();
  }

  /**
   * Resets the gameboard between games to the start button
   */
  resetGame() {
    document.getElementById("phrase").querySelector("ul").innerHTML = "";

    this.missed = 0;

    const qwerty = document.getElementById("qwerty");
    const button = qwerty.getElementsByTagName("button");

    for (let i = 0; i < button.length; i++) {
      button[i].disabled = false;
      button[i].classList.remove("chosen");
      button[i].classList.remove("wrong");
    }

    const hearts = document.getElementsByClassName("tries");
    for (let i = 0; i < hearts.length; i++) {
      let image = hearts[i].firstElementChild;
      image.src = "images/liveHeart.png";
    }
  }
}
