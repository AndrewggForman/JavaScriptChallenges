// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    let odds = array.filter((num) => num % 2 === 1 || num % 2 === -1);
    if(odds.length != 1){
        odds.sort((num1, num2) => num1 - num2);
    }
    let counter = 0;
    for(let i = 0; i < array.length; i++){
      if(array[i] % 2 === 1 || array[i] % 2 === -1){
        array[i] = odds[counter]
        counter ++
      }
    }
    return array;
  }