//NAME : TIMOTHY LEMEN
//DATE : 04272022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained
// Consider an Example :
// With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.

// Notes
// The numbers are always positive.
// The numbers are in the range (1  ≤  a, b, c  ≤  10).
// You can use the same operation more than once.
// It's not necessary to place all the signs and brackets.
// Repetition in numbers may occur .
// You cannot swap the operands. For instance, in the given example you cannot get expression (1 + 3) * 2 = 8.
// Input >> Output Examples:
// expressionsMatter(1,2,3)  ==>  return 9
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

// expressionsMatter(1,1,1)  ==>  return 3
// Explanation:
// After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

// expressionsMatter(9,1,1)  ==>  return 18
// Explanation:
// After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18.


//Code Goes below here
//====================
function expressionMatter(a, b, c) {
    let r = [];
    r.push((a+b)*c);
    r.push(a*(b+c));
    r.push(a+b+c);
    r.push(a*b*c);
    r.push(a+b*c);
    r.push(a*b+c);
    r.sort((a,b)=>b-a);
    return r[0];
  }

  //a little strange - probably worth it to revisit.  i reviewed the comments and 'documentation' and discovered this was not as complicated as I first thought.  there are really only three signs in play and they can only be used in specific ways.  where the operands(numbers) cannot move places, the signs move around them.  I used the test cases to determine if i had covered all my bases.  after pushing all results into an array I sorted them and returned the largest.  (Math.max would have worked, I used something else)