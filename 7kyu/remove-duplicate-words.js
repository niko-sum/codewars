// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// My solution
function removeDuplicateWords (s) {
    let arr = s.split(' ')
    return [...new Set(arr)].join(' ')
  }