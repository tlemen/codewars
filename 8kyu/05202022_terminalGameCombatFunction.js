//NAME : TIMOTHY LEMEN
//DATE : 05202022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.


//Code Goes below here
//====================

function combat(health, damage) {
  while(health - damage < 0)return 0;
  return health - damage 
}

// one line - ternary

const combat = (health, damage) => health - damage < 0 ? 0 : health - damage

