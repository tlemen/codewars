//NAME : TIMOTHY LEMEN
//DATE : 05012022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.



//Code Goes below here
//====================
function correct(string)
{                       //started here by creating an object literal
  var chars = {         
    '1': 'I',           //these are string substitutions, or properties of the object
    '5': 'S',           //when string '5' is recognied the object wants to replace with 'S'
    '0': 'O'
  }
    return string.replace(/[1,5,0]/g,m=>chars[m])  
                        //here the arrow function does the replacement using the object
                        //using regex for the characters we're searching for, we then
                        //use a function to return for m the object literal definition
                        //of its string partner
  }
