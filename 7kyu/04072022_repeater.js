//NAME : TIMOTHY LEMEN
//DATE : 04/07/2022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
//Thinkful - String Drills: Repeater

// Write a function named repeater() that takes two arguments (a string and a number), and returns a new string where the input string is repeated that many times.

// Example: (Input1, Input2 --> Output)
// "a", 5 --> "aaaaa"


//Code Goes below here
//====================
function repeater(string, n){
    //set variable for increment
    let a = 0
    //set array for holder
    let newArr = []
    //while statement to loop for the valueOfNTimes
    while(a<n){
      //push the string value to the new array once per loop
      newArr.push(string)
      //increase varaible a
      a++ 
    }
    //join makes a string out of an array separated by whatever is between ''
     return newArr.join('')
  }

  //We have just created a long form of the method 
  string.repeat(n)
  //sooooooooooooo also valid is
  function repeater(string, n){
      return string.repeat(n)
  }
  //lol