//NAME : TIMOTHY LEMEN
//DATE : 04272022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.


//Code Goes below here
//====================
function feast(beast, dish) {
    return (beast[0] === dish[0]) && (beast[beast.length-1]===dish[dish.length-1])
  }

  //using javascripts ability to use indexes on strings we can use the length function to determine if the two pairs are true.  the first letter at index [0] && (and) the last letter at length-1 (or the calculation for the last index)