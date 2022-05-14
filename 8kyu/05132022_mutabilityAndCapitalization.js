//NAME : TIMOTHY LEMEN
//DATE : 05132022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.

//Code Goes below here
//====================
function capitalizeWord(word) {
    word = word[0].toUpperCase()+word.slice(1,word.length);
    return word;
  }  

//first try but was it best try?  

//could have skipped the reassignment and the second part of the slice command
// and returned directly 

return word[0].toUpperCase()+word.slice(1)