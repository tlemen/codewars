//NAME : TIMOTHY LEMEN
//DATE : 05172022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


//Code Goes below here
//====================
function remainder(n, m){
    while(n>m){
      return n%m
    }
    return m%n;
  }

  //line

 const remainder = (n, m) => (n>m) ? n%m : m%n
//first try on that btw :)))

