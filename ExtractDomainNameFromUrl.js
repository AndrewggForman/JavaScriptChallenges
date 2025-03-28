// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let fix1 = url.split("http://").join("").split("www.").join("").split("").join("").split("https://").join("").split("");
    let final_word = [];
    let index = 0;
    let curr_letter = "placeholder"
    while(curr_letter !== "."){
      curr_letter = fix1[index];
      if(curr_letter === "."){
        break;
      }
      final_word.push(curr_letter);
      index++;
    }
    return final_word.join("")
  }