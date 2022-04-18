//NAME : TIMOTHY LEMEN
//DATE : 04162022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
//Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks


//Code Goes below here
//====================
function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
  }

  //use of the spread operator made this very simple.  at first
  //i wanted to use [...arr] within the Math operators but it
  //turned out not to be necessary.  will read on that today.