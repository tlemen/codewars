//NAME : TIMOTHY LEMEN
//DATE : 05242022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
//remove one exclamation point.  if Hi!!! >>> Hi!! if Hi >> Hi if Hi! >> Hi

//Code Goes below here
//====================
function remove (string) {
    return string.charAt(string.length-1)=='!' ? string.slice(0,string.length-1) : string
  }