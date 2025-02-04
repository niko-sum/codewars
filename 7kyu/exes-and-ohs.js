// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// My solution
function XO(str) {
    let numOfOs = 0
    let numOfXs = 0
    let lowrStr = str.toLowerCase()
    
    
    for (let i = 0; i<lowrStr.length; i++){
      if (lowrStr[i] === "o"){
        numOfOs++
      } else if (lowrStr[i] === "x"){
        numOfXs++
      }
    }
    return numOfOs === numOfXs
  }