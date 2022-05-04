//NAME : TIMOTHY LEMEN
//DATE : 05012022
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]


//Code Goes below here
//====================
function friend(friends){
    return (friends.filter(x=>x.length===4))
   }