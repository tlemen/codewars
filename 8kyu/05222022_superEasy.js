//NAME : TIMOTHY LEMEN
//DATE : 05222022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//Code Goes below here
//====================

function problem(x){
  return (typeof x === 'string') ? 'Error' : x*50+6
}

const problem = x => typeof x === 'string' ? "Error" : x*50+6

//First tryyy