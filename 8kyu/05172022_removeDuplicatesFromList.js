//NAME : TIMOTHY LEMEN
//DATE : 05172022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.


//Code Goes below here
//====================

//Best method:
function distinct(a) {
    return new[...Set(a)]
}

//From the MDN: Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection. //

//My method using a for loop below.  

function distinct(a) {
    let result = []
    for(i=0;i<a.length;i++){
      if(result.includes(a[i])){
         result
        }
      else result.push(a[i])
    }  
    return result;
  }

