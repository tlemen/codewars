//NAME : TIMOTHY LEMEN
//DATE : 05042022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
//This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
// You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


//Code Goes below here
//====================
function checkForFactor (base, factor) {
    return Number.isInteger(base/factor)
  }

//The factor of the base will be divisible.  Therefore the result of this will be an integer NOT a floated number (in JS terms).  Using the Number method isInteger we can return a boolean value that fulfills the request.

//alternatively we could return a modulo of 0 if the number is divisible

function checkForFactor (base, factor) {
    return (base%factor === 0)
  }

//Or return the inverse of its result

function checkForFactor (base, factor) {
    return !(base%factor)
  }

  //this works because the result if it IS A FACTOR is 0.  0 = false, therefore returning the opposite is accurate