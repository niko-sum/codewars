// Write a function that takes an integer num (num >= 0) and inserts dashes ('-') between each two odd digits in num.

// Examples
// 454793 ---> "4547-9-3"
//      0 ---> "0"
//      1 ---> "1"
// 13579  ---> "1-3-5-7-9"
//  86420 ---> "86420"

// My solution
function insertDash(num) {
    let arr =  String(num).split('')
    let result = []
    
    for(let i=0; i<arr.length; i++){
      if (i + 1 < arr.length && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 ){
        result.push(arr[i], '-')
      }else{
        result.push(arr[i])
      }
    }
   return result.join('')
 }