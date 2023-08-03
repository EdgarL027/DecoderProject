// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function isValidAlphabet(alphabet) {
    if (typeof alphabet !== "string" || alphabet.length !== 26) {
      return false;
    }

    const seenChars = new Set();

    for (let char of alphabet) {
      if (!/[a-zA-Z]/.test(char)) {
        // Allow special characters in the alphabet
        continue;
      }

      char = char.toLowerCase();

      if (seenChars.has(char)) {
        // Ensure all characters are unique in the alphabet
        return false;
      }

      seenChars.add(char);
    }

    return true;
  }

  function substitution(input, alphabet, encode = true) {
    // Validate the 'alphabet' parameter
    if (!isValidAlphabet(alphabet)) {
      return false;
    }

    const lowerCaseInput = input.toLowerCase();
    const output = [];

    for (let i = 0; i < lowerCaseInput.length; i++) {
      const char = lowerCaseInput[i];
      let index;

      if (char === " ") {
        // Preserve spaces
        output.push(" ");
        continue;
      } else if (encode) {
        // Encoding
        index = char.charCodeAt(0) - "a".charCodeAt(0);
      } else {
        // Decoding
        index = alphabet.indexOf(char);
      }

      // Handle non-alphabetic characters
      if (index === -1) {
        output.push(char);
      } else {
        // Apply the substitution based on the encode flag
        const substitutionChar = encode
          ? alphabet[index]
          : String.fromCharCode("a".charCodeAt(0) + index);
        output.push(substitutionChar);
      }
    }

    return output.join("");
  }
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
