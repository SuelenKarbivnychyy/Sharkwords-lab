const word = 'hello';

const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the chars in `word` and create divs.
// The divs should be appended to the section with id="word-container".
const createDivsForChars = (word) => {

  for (let letter of word){
    let createDivs = document.querySelector('#word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
  
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons"
const generateLetterButtons = () => {
  for (let letter of ALPHABET){
    let generate_button = document.querySelector('#letter-buttons').insertAdjacentHTML('beforeend', `<button> ${letter} </button>`);
  }
 

};

// Set the `disabled` property of `buttonEl` to `true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
 buttonEl.disabled = true;
 
};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter) => {
  
  if (word.includes(letter)) {         
      return true;

  }


};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guesss
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  // const word = 'hello';

  // call the function that makes an empty line for each letter in the word

  createDivsForChars(word)

  // call the function that makes a button for each letter in the alphabet
  generateLetterButtons(ALPHABET)

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
