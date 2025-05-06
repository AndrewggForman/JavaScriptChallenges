// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {

    let uncap_letter = s.toLowerCase();
    //word broken up into array of lowercase letters
    let lowercase = Array.from(uncap_letter);
    let used_letters = [];
    let used_twice = [];
    
    //fill used/used twice arrays with letters
    for(let i = 0; i < lowercase.length; i++){
      if(used_letters.includes(lowercase[i])){
        used_twice.push(lowercase[i]);
      } else{
        used_letters.push(lowercase[i]);
      }
    }
    
    //if we hit a word that wasn't in used_twice, check if it is in our used letters, meaning it's the lower case version, if so return
    for(let i = 0; i < used_letters.length; i++){
      if(!(used_twice.includes(used_letters[i]))){
        if(s.includes(used_letters[i])){
          return used_letters[i];
        //else, it must be a letter we turned into lowercase, so we'll just revert it back to uppercase before returning
        } else{
          return used_letters[i].toUpperCase();
        }
      }
    }

    //never hit a viable word, either given an empty string or only repeating chars
    return "";
    
  }