//NAME : TIMOTHY LEMEN
//DATE : 05162022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

// Examples
// isPalindrome("anna")   ==> true
// isPalindrome("walter") ==> false
// isPalindrome(12321)    ==> true
// isPalindrome(123456)   ==> false



//Code Goes below here
//====================
function isPalindrome(line) {
    let halfway = line.length/2
    const frontHalf = line.slice(0,halfway)
    const backReverse = line.slice(halfway).split('').reverse().join('')
    return frontHalf === backReverse;
  }