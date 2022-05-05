//NAME : TIMOTHY LEMEN
//DATE : 05042022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//Code Goes below here
//====================
function well(x){               //the problem provided an array of good/bad elements
    let r = 0;                  //set an empty variable to ++ as condition is met
    for(i=0;i<x.length;i++){    //for loop to iterate through array
      if (x[i]=='good'){        //condition to count the 'good ideas'
        r++                     //++ the counter
      }}                        
    if (r>2){                   //the series of conditions set by the challenge
      return 'I smell a series!'
    }else if(r>=1){
      return 'Publish!'
    }else{                      //i could have done an object here, but 8kyu meant
      return 'Fail!'            //else if just seemed appropraite 
    }
  }