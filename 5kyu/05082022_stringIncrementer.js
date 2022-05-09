//NAME : TIMOTHY LEMEN
//DATE : 05092022
//CODEWARS KATA LEVEL 5

//KATA DESCRIPTION
//================
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

//Code Goes below here
//====================
function incrementString(strng) {
    let i = 1;
    while(isNaN(strng[strng.length-i])){
      return strng+1
    }
    while(strng[strng.length-i] === '9'){
      i++
    }
    if(isNaN(strng[strng.length-i])){
      i--
    }
    let numbers = strng.slice(strng.length-i)
    numbers = Number(numbers)+1
    return strng.slice(0,(strng.length-i))+String(numbers)
    
  }