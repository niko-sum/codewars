// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, the returned array should show them in the order they appeared in the given string.

// All inputs will be valid.

// My solution
function last(x){
    let arr = x.split(' ')
    let sorted = arr.sort((a, b) => a.charAt(a.length-1).localeCompare(b.charAt(b.length-1)))
    
    return sorted 
  }