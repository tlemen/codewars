//NAME : TIMOTHY LEMEN
//DATE : 05052022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Kata Task
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

//Code Goes below here
//====================
var humanYearsCatYearsDogYears = function(humanYears) {
    if(humanYears<2){
      return [humanYears, humanYears*15, humanYears*15]
    }else if(humanYears==2){
      return [2, 24, 24]
    }else if(humanYears>2){
      return [humanYears, 24+((humanYears-2)*4), 24+((humanYears-2)*5)]    
    }
  }

  //less than 2 eliminates errors for 0 (if present)
  //2 is static
  //3+ takes into account the previous math, plus adds an equation for the remainder
  //could be solved with an object?