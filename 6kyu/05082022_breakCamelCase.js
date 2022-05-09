//NAME : TIMOTHY LEMEN
//DATE : 05082022
//CODEWARS KATA LEVEL 6

//KATA DESCRIPTION
//================
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//Code Goes below here
//====================
function solution(string) {                                   //break the string at the capital letters
  let newString = "";                                         //create a target string
                                                              //iterate through the string (could use arr)
  for(i=0;i<string.length;i++){                               //charAt returns a string at position i
      if(string.charAt(i)==string.charAt(i).toUpperCase()){   //if the character at charAt(i)===.toUpperCase()
      newString = newString + string.slice(0,i) + " ";        //slice the OG string at index i, add to newString
      string = string.slice(i);                               //replace string with sliced version
      i=0;                                                    //IMPORTANT!! RESET i TO 0!!!
      }
  }
  return newString + string                                   //concat the new String w/ last capital string
                                                              //having " " added to the newString makes it easy
                                                              //to just tack it on and you're done!
}

//all in all the problem becomes simple once we look at it deeply.  interate through a string/array
//find the point to split and use the built in method, depositing the result in a target variable
//the biggest issue with my experience was not reseting i to 0, which meant that as i iterated through, 
//my results would miss later capitals, because i was at a higher position from the earlier test
//
//another problem I had was figuring out how to return a string character, charAt was the key to solving that
//since it's a string method and returns elements with string properties by default, meaning i was always
//in the right syntax, rather than confusing filter or other array .methods that use index etc.
//
//a fun problem and i learned an important lesson