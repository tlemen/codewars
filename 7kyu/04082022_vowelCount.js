//NAME : TIMOTHY LEMEN
//DATE : 04/08/2022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// //VOWEL COUNT
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters


//Code Goes below here
//====================
function getCount(str) {
    //this top line was included i never used it
    var vowelsCount = 0;
    //tried for one line code more or less - struggled witht he filter here until I set equivilancies separated by ||
    let arr = ((str.split('')).filter(x => (x === ("e")) || (x === ("a")) || 
              (x === ("i")) || (x === ("o")) || (x === ("u"))))
              //return could be at the end again, but still needs cleaned up so w/e
    return arr.length
  } 

  //this worked, there's a better solution using filter and includes() try for active recall!