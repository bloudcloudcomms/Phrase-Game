/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;

    }

    /**
     * Display phrase on game board
     */
    addPhraseToDisplay() {
       const selectedPhrase = this.phrase.split('');
       const ul = document.getElementById('phrase').firstElementChild;

       for (let i = 0; i < selectedPhrase.length; i++ ) {
           if (selectedPhrase[i] === ' ') {
               ul.innerHTML += `<li class="space"> </li>`;
           } else {
               ul.innerHTML += `<li class="hide letter ${selectedPhrase[i]}">${selectedPhrase[i]}</li>`;
           };
       };
    };
       



}