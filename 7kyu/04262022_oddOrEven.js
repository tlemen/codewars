//NAME : TIMOTHY LEMEN
//DATE : 04262022  
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!


//Code Goes below here
//====================
function oddOrEven(array) {
  array.push(0);
   return array.reduce((a,c)=>a+c)%2 ? "odd" : "even"
}

//Top solution on codewars (below) was practically the same - but written with the reduce function in mind.

function oddOrEven(array) {
   return array.reduce((a,c)=>a+c, 0)%2 ? "odd" : "even"
}

//as a reminder the 'odd' is in the TRUE category because 1 === true and 0 === false.  While %2 for even numbers produces a 0 remainder therefore 0 => falsy => string: "even"