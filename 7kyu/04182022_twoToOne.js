//NAME : TIMOTHY LEMEN
//DATE : 04182022   
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"



//Code Goes below here
//====================
function longest(s1, s2) {
    let r1 = s1.concat(s2).split('').sort();
    let r2 = [];
    for (i = 0; i < r1.length; i++){
      if (r1[i]!==r1[i-1]){
        r2.push(r1[i])
      }
    }
    return r2.join('')
  }