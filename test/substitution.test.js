// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution function", () => {
  it("should return false if the alphabet is not exactly 26 characters long", () => {
    expect(substitution("thinkful", "xoyqmcgrukswafl")).to.be.false;
  });

  it("should return false if the alphabet contains duplicate characters", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibevv")).to.be.false;
  });

  it("should correctly translate the given phrase based on the given alphabet", () => {
    const message = "my message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const encoded = substitution(message, alphabet);
    const decoded = substitution(encoded, alphabet, false);

    expect(encoded).to.equal("yp ysii.rs");
    expect(decoded).to.equal(message);
  });

  it("should maintain spaces in the message before and after encoding or decoding", () => {
    const message = "hello world";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
    const encoded = substitution(message, alphabet);
    const decoded = substitution(encoded, alphabet, false);

    expect(encoded).to.equal("dsccv kvbce");
    expect(decoded).to.equal(message);
  });

  it("should ignore capital letters", () => {
    const message1 = "A Message";
    const message2 = "a message";
    const alphabet = ".waeszrdxtfcygvuhbijnokmpl";

    expect(substitution(message1, alphabet)).to.equal(
      substitution(message2, alphabet)
    );
  });
});
