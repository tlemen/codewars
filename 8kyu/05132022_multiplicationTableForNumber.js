//NAME : TIMOTHY LEMEN
//DATE : 05132022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//=================
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50


//Code Goes below here
//====================
function multiTable(number) {                       
    let res = ''                                    
    for(i=1;i<=9;i++){
      res += `${i} * ${number} = ${i*number}\n` //line breaks only after 9
    }
    return res + `10 * ${number} = ${10*number}`//gamed it a bit here
  }                                             //still counts? will refactor   

  //codewars top solution provided this interesting ternary as a way to
  //edit the last line (keep the /n from spoiling it)

  function multiTable(number) {
      let res = ''
      for(i=1;i<=10;i++){
        `${i} * ${number} = ${i*number}$${i<10 ? '\n' : ''}`
      }
  }
  //the ternary here does interesting work.  not only keeping the code dry
  //it uses a typically complex function in a very clean way.  
  //print to new line (\n) or, if you're at the max value, end it ('').  