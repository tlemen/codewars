//NAME : TIMOTHY LEMEN
//DATE : 0511   2022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Write a function that checks if a given string (case insensitive) is a palindrome.

//Code Goes below here
//====================
function isPalindrome(x) {
    x = x.toUpperCase()
    return x === x.split('').reverse().join('')
  }