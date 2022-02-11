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
                        new Phrase ('life is like a box of chocolates'),
                        new Phrase ('there is no trying'),
                        new Phrase ('may the force be with you'),
                        new Phrase ('you have to see the matrix for yourself'),
                        new Phrase ('you talking to me'),
                        new Phrase ('you are my sunshine'),
                        new Phrase ('we are not in kansas anymore'),
                        new Phrase ('show me the money'),
                        new Phrase ('to infinity and beyond')
                        ];
        return phrases;
        };

    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    };
    
    /**
     * Begins game by selecting a random phrase and displaying it to user
     */
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = game.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    };
}

 
