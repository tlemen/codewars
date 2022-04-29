//NAME : TIMOTHY LEMEN
//DATE : 04282022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!


//Code Goes below here
//====================
function removeEveryOther(arr){
    return arr.filter((x,i)=>i%2===0)
  }

  //filter automatically modifies the original array
  //filter will take in three variables, element, index, array each time in that order
  //you can use filter similar to .map or .forEach where the function will search each element for ones that satisfy it