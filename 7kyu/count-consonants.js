// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

//My solution
function consonantCount(str) {
    let count = 0
    let arr = str.split('')
    
    for(let i=0; i<arr.length; i++){
      if ("BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz".includes(arr[i])){
        count++
      }
    }
    return count
  }