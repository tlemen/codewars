//NAME : TIMOTHY LEMEN
//DATE : 04302022
//CODEWARS KATA LEVEL 8

//KATA DESCRIPTION
//================
// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

//Database listed under 'greetings' below was provided

//Code Goes below here
//====================
function greet(language) {
    const greetings = { 
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  }
    if(greetings[language]!==undefined){
      return greetings[language];
    }
    return greetings['english']  
  }
/* the first foray into objects for me here.  i had a hard time understanding the input/output procedure.  i understood eventually that the object is treated like a variable with the properties being sub-variables, or (like an array) an index within.  here i used square brackets to call the db info but i am aware that greetings.english dot notation would also return the last greeting.  note the use of strings as the input