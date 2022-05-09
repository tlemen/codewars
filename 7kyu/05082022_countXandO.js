//NAME : TIMOTHY LEMEN
//DATE : 05082022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//Code Goes below here
//====================
function XO(str) {
    let xCount = 0                          //counters for each value
    let oCount = 0
    str = str.toUpperCase().split('')       //recreate str upperCase and as an array
    str.forEach(x=>{if(x==='X'){            
      xCount++
    }})
    str.forEach(x=>{if(x==='O'){            //so nice we do it twice
      oCount++
    }})
    return (xCount == oCount)               //dont be a fool, use a bool
  }

  //maybe there's a faster way, but i used two counter (enumerator?) and returned a
  //bool for their values.  this avoids character confusion etc.