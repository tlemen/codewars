//NAME : TIMOTHY LEMEN
//DATE : 04242022   
//CODEWARS KATA LEVEL 6

//KATA DESCRIPTION
//================
// Implement a function, so it will produce a sentence out of the given parts.

// Array of parts could contain:

// words;
// commas in the middle;
// multiple periods at the end.
// Sentence making rules:

// there must always be a space between words;
// there must not be a space between a comma and word on the left;
// there must always be one and only one period at the end of a sentence.


//Code Goes below here
//====================
function makeSentence(parts){
    let err = parts[0]; //first word of string = first element in array
    for(i=1;i<parts.length;i++) //for loop to filter array content
    if(parts[i].match(/\W/gi)){ //if a non-word element 
      err+=parts[i]; //add directly to string
    }else{ //if a word element
      err+=(' '+parts[i]); //add to string with a space
    }
    err+='.' //mkae sure there's a period at the end
    err=err.replace(/\.+/g,'.'); //if more than one '.' replace it with only one
    return err
  }