//NAME : TIMOTHY LEMEN
//DATE : 05262022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//=================
//Is this an anagram?

//Code Goes below here
//====================
var isAnagram = function(test, original) {
    return test.toUpperCase().split('').sort().join('')===original.toUpperCase().split('').sort().join('')
  };