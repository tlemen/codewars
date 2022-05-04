//NAME : TIMOTHY LEMEN
//DATE : 05022022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

// Example: (Input1, Input2 -->Output)

//Code Goes below here
//====================
function sumStr(a,b) {
    return String((+a)+(+b))  
  } 

//I used the unary + to force the variable to extract numbers from the strings
//knowing the cases would all be whole numbers/empty strings
//after adding them (not concat because of the (+variable))
//I used the String object to turn the data back into a string
