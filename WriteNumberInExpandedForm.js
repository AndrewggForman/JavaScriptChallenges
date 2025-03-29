// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

//    12 --> "10 + 2"
//    45 --> "40 + 5"
// 70304 --> "70000 + 300 + 4"
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    let digits = String(num).split("");
    let components = [];
    for(let i = 0; i < digits.length; i++){
      let curr_component = String(digits[i]);
      if(curr_component === "0"){
        continue;
      }
      let counter = 0;
      while(counter < digits.length - 1 - i){
        curr_component += "0";
        counter++;
      }
      components.push(curr_component);
    }
    return components.join(" + ");
}