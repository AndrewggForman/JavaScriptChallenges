// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    let current_sum = 0;
    let max_sum = 0;
    
    if(arr.length === 0){
      return 0;
    }
    
    for(let i = 0; i < arr.length; i++){
      if(current_sum + arr[i] > 0){
        current_sum += arr[i];
        if(current_sum > max_sum){
          max_sum = current_sum;
        }
      } else{
        current_sum = 0;
      }
    }
    return max_sum;
  }