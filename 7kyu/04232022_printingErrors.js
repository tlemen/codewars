//NAME : TIMOTHY LEMEN
//DATE : 04232022   
//CODEWARS KATA LEVEL 7

//KATA DESCRIPTION
//================
// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples:
// s="aaabbbbhaijjjm"
// printer_error(s) => "0/14"

// s="aaaxbbbbyyhwawiwjjjwwm"
// printer_error(s) => "8/22"



//Code Goes below here
//====================
function printerError(s) {
    let err = 0; //err = error counter, starts at 0
    for(i=0;i<s.length;i++) //iterator through the string?! i thought i split it but oh well, guess you don't need to
    if(s[i].match(/[n-z]/gi)){ //regex here n-z in brackets gives a range, g = global (keep testing after you find a result) and i ignores Upper/Lower cases
      err++ //err counter goes up by 1
    }
    return `${err}/${s.length}`; //display parameter, other results had this as err +'/'+ s.length but it's just concat :)
  }