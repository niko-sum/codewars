// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

//My solution
function factorial(n){
    let result = 1
    if (n===0){
      return result
    }else{
      for (let i = 1; i<=n; i++){
        result *= i
      }
    }
    return result
  }