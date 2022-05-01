//NAME : TIMOTHY LEMEN
//DATE : 04292022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


//Code Goes below here
//====================
function reverseWords(str) {
    let r2 = [];
    let arr = str.split(' ');
    console.log(`arr - ${arr}`);
    for(i=0;i<arr.length;i++){
      r2.push(arr[i].split('').reverse().join(''));
      console.log(r2)
    }
    return r2.join(' ');
  }
/* at first i thought of using forEach or map, but with the combination of arrow functions and not having a lot of forEach practice I defaulted to a for() loop and splitting to an array and rejoining.