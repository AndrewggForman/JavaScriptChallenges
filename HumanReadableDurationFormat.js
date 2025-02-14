function formatDuration (seconds) {
    let years = 0;
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let remaining_seconds = 0;
    let currentSeconds = seconds;
    let components = [];
    let stringSeconds;
    let stringMinutes;
    let stringHours;
    let stringDays;
    let stringYears;
    while(currentSeconds > 0){
      if(currentSeconds >= 31536000){
        years = Math.floor(currentSeconds / 31536000);
        currentSeconds = currentSeconds % 31536000;
        if(years === 1){
          stringYears = "1 year";
        } else{
          stringYears = `${years} years`;
        }
        components.push(stringYears)
      } else if(currentSeconds >= 86400){
        days = Math.floor(currentSeconds / 86400);
        currentSeconds = currentSeconds % 86400;
        if(days === 1){
          stringDays = "1 day";
        } else{
          stringDays = `${days} days`;
        }
        components.push(stringDays);
      } else if(currentSeconds >= 3600){
        hours = Math.floor(currentSeconds / 3600);
        currentSeconds = currentSeconds % 3600;
        if(hours === 1){
          stringHours = "1 hour";
        } else{
          stringHours = `${hours} hours`;
        }
        components.push(stringHours);
      } else if(currentSeconds >= 60){
        minutes = Math.floor(currentSeconds / 60)
        currentSeconds = currentSeconds % 60;
        if(minutes === 1){
          stringMinutes = "1 minute";
        } else{
          stringMinutes = `${minutes} minutes`;
        }
        components.push(stringMinutes);
      } else if(currentSeconds > 0){
        remaining_seconds = currentSeconds;
        if(remaining_seconds === 1){
          stringSeconds = "1 second"
        } else{
          stringSeconds = `${remaining_seconds} seconds`
        }
        components.push(stringSeconds);
        currentSeconds = 0;
        console.log(components)
      }
    }
  
    if(components.length === 0){
      return "now";
    }else if(components.length === 2){
      return components.join(" and ");
    } else if(components.length === 1){
      return components.join(" ");
    } else if(components.length > 2){
      let firstPart = "";
      for(let i = 0; i < components.length - 2; i++){
        firstPart += `${components[i]}, `;
      }
      console.log(firstPart + `${components[components.length - 2]} and ${components[components.length -1]}`)
      return firstPart + `${components[components.length - 2]} and ${components[components.length -1]}`
    }
}
  

// formatDuration(1)
// formatDuration(62)
// formatDuration(120)
// formatDuration(3600)
formatDuration(3662)