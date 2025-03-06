// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag (str) {
    if(str.length === 0){
      return false;
    }
    let trimmed = str.trim();
    let words = trimmed.split(" ");
    if(trimmed.length === 0){
      return false;
    }
    if(words[0] === ""){
      return false;
    }
    let realWords = words.filter((word) => word.length > 0);
    
    let capitalizedWords = realWords.map((word) => {
      let newWord = word[0].toUpperCase() + word.slice(1);
      return newWord;
    })
    capitalizedWords.unshift("#")
    if (capitalizedWords.join("").length > 140){
      return false;
    }
    return capitalizedWords.join("")
  }
  