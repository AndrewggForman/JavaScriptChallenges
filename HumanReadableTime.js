// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(((seconds - (hours * 3600))/60))
    let singles = (seconds - (hours * 3600) - (minutes * 60))
    let timeArr = [String(hours), String(minutes), String(singles)]
    for(let i = 0; i < timeArr.length; i++){
      if(timeArr[i].length < 2){
        timeArr[i] = `0${timeArr[i]}`;
      }
    }
    let wordForm = timeArr.join(":");
    return wordForm
  }