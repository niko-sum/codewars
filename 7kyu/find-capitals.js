// Instructions
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

//My solution

var capitals = function (word) {
	let result = []
  word.split('').map((e, i) =>{
    if(e === e.toUpperCase()) {
      result.push(i)
    }
  })
  return result
};