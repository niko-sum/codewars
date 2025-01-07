// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

// My solution
function getMiddle(s) {
    let n = s.length
    
    if (n % 2 === 0){
      return s[n/2 -1] + s[n/2]
    } else if (n % 2 !== 0){
      return s[(n - 1) / 2]
    } else if (s.length <= 1){
      return s
    }
  }