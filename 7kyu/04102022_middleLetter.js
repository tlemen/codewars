//NAME : TIMOTHY LEMEN
//DATE : 04102022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
//Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"


//Code Goes below here
//====================
function getMiddle(s){
    //we need to be able to isolate letters so split them to an array
    let arr = s.split('')
    //we need the length to find the middle
    let len = s.split('').length
    //middle is going to be floated so bring it to its lowest value
    let m = Math.floor(len/2);
    //if the length is even it will return 0 (false) so we need two elements
    //if the length is odd it will return 1 (true) and we need one element
    return len % 2 ? arr[m] : arr[m-1]+arr[m]; 
  }