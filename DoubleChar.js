// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    let letters = [];
    for(let i = 0; i < str.length; i++){
      letters.push(str[i]);
      letters.push(str[i]);
    }
    return letters.join("");
  }
  