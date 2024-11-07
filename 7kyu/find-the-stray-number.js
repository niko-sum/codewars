// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

//My solution
function stray(numbers) {
    const map = {}
    let result = null
          
    for (const num of numbers){
      map[num] = map[num] + 1 || 1  
    }
  
    
    for (const count in map){
      if (map[count] === 1 ){
        result = +count
      }
    }
    return result
  }