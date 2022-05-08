//NAME : TIMOTHY LEMEN
//DATE : 05082022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre-populated in your solution:


//Code Goes below here
//====================
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter(element => !geese.includes(element))
};

//here's some practice with .filter and .includes
//filter takes the element, index, and array in that order
//using the element we can filter using the .includes command
//.includes returns true/false
//therefore implicit return gives us all !true results of elements
//not in the geese filter (which was given, but could be 
//populated or presented as an object for higher problems)