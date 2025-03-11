// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
                     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v",
                    "w", "x", "y", "z","A","B","C","D","E","F","G","H","I","J",
                    "K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let newWord = [];
    for(const letter of message){
      let indexPos = letters.indexOf(letter);
      if(indexPos === -1){
        newWord.push(letter);
      }
      else if(indexPos < 13){
        newWord.push(letters[indexPos + 13]);
      }
      else if (indexPos < 26){
        newWord.push(letters[indexPos - 13])
      } 
      else if (indexPos < 39){
        newWord.push(letters[indexPos + 13]);
      } 
      else if (indexPos != -1){
        newWord.push(letters[indexPos - 13]);
      } 
      else{
        newWord.push(letter);
      }
    }
    return newWord.join("");

}