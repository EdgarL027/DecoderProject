// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const polybiusSquare = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };

    if (encode) {
      // Encoding logic
      const encodedMessage = input
        .toLowerCase()
        .split("")
        .map((char) => {
          if (char === " ") {
            return " ";
          } else if (polybiusSquare[char]) {
            return polybiusSquare[char];
          }
        })
        .join("");
      return encodedMessage;
    } else {
      // Decoding logic
      const formatInput = input.split(" ");
      const decodedMessage = [];

      const totalDigits = formatInput.join("").replace(/ /g, "").length;
      if (totalDigits % 2 !== 0) {
        return false; // Number of digits (excluding spaces) is odd, return false
      }

      for (const word of formatInput) {
        if (word !== "") {
          let i = 0;
          while (i < word.length) {
            const coordinate = word.substr(i, 2);
            const letter = Object.keys(polybiusSquare).find(
              (key) => polybiusSquare[key] === coordinate
            );

            if (letter === "i" || letter === "j") {
              decodedMessage.push("(i/j)");
            } else {
              decodedMessage.push(letter);
            }

            i += 2;
          }
          decodedMessage.push(" "); // Add space after each word
        } else {
          decodedMessage.push(" "); // Preserve original space
        }
      }

      return decodedMessage.join("").trim(); // Trim leading/trailing spaces only
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
