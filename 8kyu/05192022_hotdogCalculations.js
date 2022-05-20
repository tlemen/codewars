//NAME : TIMOTHY LEMEN
//DATE : 05192022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
//Hey, Mo.  Hot dog.


//Code Goes below here
//====================

function saleHotdogs(n){
  if(n>=10){
    return n*90
  }else if(n>=5){
    return n*95
  }else return n*100
}

//Footlong solution below

const saleHotdogs = n => n >= 10 ? n*90 : n>=5 ? n*95 : n*100

