//NAME : TIMOTHY LEMEN
//DATE : 04112022
//CODEWARS KATA LEVEL 6

//KATA DESCRIPTION
//================
//Persistent Bugger.

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.


//Code Goes below here
//====================
function persistence(num) {
    var j = 0;
    var nArr = num.toString().split('')
    while (nArr.length > 1){
        var numb = nArr.reduce((a,c)=>a*c)
        j++
        nArr = numb.toString().split('')
    }  
    return j
  }

  //Notes: this code can absolutely be compressed. this was my first 6kyu!