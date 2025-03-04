// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    // build here
    let tower = [];
    for(let i = 1; i <= nFloors; i++){
      let star = (i*2) - 1;
      let string1 = `${" ".repeat(nFloors - i)}${"*".repeat(star)}${" ".repeat(nFloors - i)}`
      tower.push(string1);
    }
    return tower
  }