// Given a string of space separated words, return the longest word.
// If there are multiple longest words, return the rightmost longest word.

// Examples
// "red white blue"  =>  "white"
// "red blue gold"   =>  "gold"

// My solution
function longestWord(stringOfWords) {
    let result = ''
    let arr = stringOfWords.split(' ')
    
    for (let i = 0; i<arr.length; i++){
      if (arr[i].length >= result.length){
        result = arr[i]
      }
    }
    return result
  }