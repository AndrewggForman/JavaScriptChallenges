// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"
// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

function primeFactors(n){
    let curr_num = n;
    const primes = new Map();
    let curr_divisor = 2;
    
    while(curr_num != 1){
      if(curr_num % curr_divisor === 0){
        if(primes.get(curr_divisor) === undefined){
          primes.set(curr_divisor, 1)
          curr_num = curr_num / curr_divisor
        } 
        else{
          let new_amount = Number(primes.get(curr_divisor)) + 1;
          primes.set(curr_divisor, new_amount)
          curr_num = curr_num / curr_divisor
        }
      }
      else{
        curr_divisor = nextPrime(curr_divisor)
      }
    }
    
    let string_form = "";
    const iterator1 = primes[Symbol.iterator]();
    for (const prime of iterator1) {
      if(prime[1] === 1){
        string_form += `(${prime[0]})`
      } else{
        string_form += `(${prime[0]}**${prime[1]})`
      }
    }
    return string_form
  }
  
  function isPrime(n){
    let prime = true;
    if(n % 2 === 0){
      return false;
    }
  
    for(let i = 3; i < Math.sqrt(n); i += 2){
      if(n % i === 0){
        prime = false;
        return prime
      }
    }
    return prime;
  }
    
  function nextPrime(n){
    let curr_num = n + 1;
    while(isPrime(curr_num) === false){
      curr_num++;
    }
    return curr_num;
}