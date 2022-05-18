//NAME : TIMOTHY LEMEN
//DATE : 05172022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.


//Code Goes below here
//====================
function _if(bool, func1, func2) {
  if(bool){
    return func1()
  }else return func2();
}

//line

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}