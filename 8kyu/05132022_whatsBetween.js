//NAME : TIMOTHY LEMEN
//DATE : 05132022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]


//Code Goes below here
//====================
function between(a, b) {
  let res = [];
  for (i=a;i<=b;i++){
    res.push(i)
  }
  return res
}