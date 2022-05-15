//NAME : TIMOTHY LEMEN
//DATE : 05142022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

//Code Goes below here
//====================
function shortcut (string) {
    let arr = string.split('')
    let vowel = ["a","e","i","o","u"]
    let res = arr.filter(e=>!vowel.includes(e))
    return res.join('')
  }