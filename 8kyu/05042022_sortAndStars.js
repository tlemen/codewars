//NAME : TIMOTHY LEMEN
//DATE : 05042022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// You will be given a vector of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//Code Goes below here
//====================
function twoSort(s) {
    s.sort();                           //we use the sort method to rearrange the array
    return s[0].split('').join('***');  //after that we isolate the first result and return
                                        //with '***' between using the .join method
}
  