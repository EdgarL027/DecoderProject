// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // Check if the shift value is valid
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    // Prepare the alphabet
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const inputLowerCase = input.toLowerCase();
    let result = "";

    // Loop through each character in the input
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      const charLowerCase = inputLowerCase[i];

      // Handle non-alphabetic characters
      if (!alphabet.includes(charLowerCase)) {
        result += char;
        continue;
      }

      // Calculate the shift based on the encode/decode flag
      let shiftAmount = shift;
      if (!encode) {
        shiftAmount = -shift;
      }

      // Shift the character
      const alphabetIndex = alphabet.indexOf(charLowerCase);
      const shiftedIndex = (alphabetIndex + shiftAmount + 26) % 26;
      const shiftedChar = alphabet[shiftedIndex];

      // Maintain capitalization
      if (char === char.toLowerCase()) {
        result += shiftedChar;
      } else {
        result += shiftedChar.toLowerCase();
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
