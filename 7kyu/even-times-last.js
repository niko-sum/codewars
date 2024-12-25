// Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

// My solution
function evenLast(numbers) {
  
    return  numbers.reduce((a, b, c) => c % 2 === 0 ? a + b : a, 0) * numbers[numbers.length-1] || 0
 }