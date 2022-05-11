//NAME : TIMOTHY LEMEN
//DATE : 05102022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

//Code Goes below here
//====================
function peopleWithAgeDrink(old) {
    if(old>=21){
      return 'drink whisky'
    }else if(old>17){
      return 'drink beer'
    }else if(old>13){
      return 'drink coke'
    }else{
      return 'drink toddy';
  }};