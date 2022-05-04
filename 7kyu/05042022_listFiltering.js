//NAME : TIMOTHY LEMEN
//DATE : 05042022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

//Code Goes below here
//====================
function filter_list(l) {                       //filter may have been a hint here
    return (l.filter(x=>Number.isInteger(x)));  //used map to return results to a new array
  }                                             //with the isInteger method (could hav 
                                                // used Number() by itself ig)