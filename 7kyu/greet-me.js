// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// My solution
var greet = function(name) {
    let cap = name.toLowerCase()
    cap = cap.charAt(0).toUpperCase() + cap.slice(1)
    return `Hello ${cap}!`
  };