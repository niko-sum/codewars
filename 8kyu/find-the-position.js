// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

//My solution
function position(letter){
    let alphabetPos =  letter.charCodeAt(0) - 96;
    return `Position of alphabet: ${alphabetPos}`;
  }