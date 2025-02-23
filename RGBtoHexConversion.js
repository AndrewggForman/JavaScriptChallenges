// The rgb function is incomplete. Complete it so that passing in RGB decimal values 
// will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. 
// Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    let red = roundRGBValue(r)
    let green = roundRGBValue(g)
    let blue = roundRGBValue(b)
    let red1 = Math.floor(red / 16);
    let red2 = red % 16;
    let green1 = Math.floor(green / 16);
    let green2 = green % 16;
    let blue1 = Math.floor(blue / 16);
    let blue2 = blue % 16;
    let characters = [];
    characters.push(numToHex(red1))
    characters.push(numToHex(red2))
    characters.push(numToHex(green1))
    characters.push(numToHex(green2))
    characters.push(numToHex(blue1))
    characters.push(numToHex(blue2))
    
    return characters.join("");
  }
  
  function roundRGBValue(value){
    if(value > 255){
      return 255;
    } else if(value < 0){
    return 0;
    } else{
      return value;
    }
  }
  
  function numToHex(number){
     if(number < 10){
       return String(number)
     } else if(number === 10){
       return "A"
     } else if(number === 11){
       return "B"
     } else if(number === 12){
       return "C"
     } else if(number === 13){
       return "D"
     } else if(number === 14){
       return "E"
     } else{
       return "F"
     }
  }
  
  // Divide each RGB value by 16 and note down the quotient and remainder.
  // Convert the quotient and remainder into their corresponding hex values using the conversion table (0-9 and A-F).
  // Concatenate the resulting hex values together, ensuring that each component is represented by two characters.
  // Prefix the hex code with a pound sign (#) to indicate it is a hexadecimal color.