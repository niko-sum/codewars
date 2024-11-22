// Filter the number
// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?

// Task
// Your task is to return a number from a string.

// Details
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//My solution
function filterString(value) {
    let result = []
    let num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    value.split('').forEach( e => {
      if (num.includes(e)){
        result.push(Number(e))
      }
    })
    let num1 = result.join('')
    return Number(num1)
  }