// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    //built using a map, it won't take a map object as a valid value;
    //   const letters = new Map();
    //   for(const letter of string){
    //     if(letters.has(letter)){
    //       let value = letters.get(letter) + 1
    //       letters.set(letter, value);
    //     }else{
    //       letters.set(letter, 1)
    //     }
    //     console.log(letters)
    //   }
    //     return letters;
    
    const letters = {}
    for(const letter of string){
      if(letters[letter] === undefined){
        letters[letter] = 1;
      } else{
        letters[letter] += 1;
      }
    }
    return letters;
  }