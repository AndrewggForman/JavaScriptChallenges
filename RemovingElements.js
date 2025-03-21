// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr){
    let arr2 = [];
    for(let i = 0; i < arr.length; i += 2){
      arr2.push(arr[i]);
    }
    return arr2;
  }