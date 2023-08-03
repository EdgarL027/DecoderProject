// Write your tests here!

const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius function", () => {
  it("should encode 'thinkful' to '4432423352125413'", () => {
    const encodedMessage = polybius("thinkful");
    expect(encodedMessage).to.equal("4432423352125413");
  });

  it("should decode '4432423352125413' to 'th(i/j)nkful'", () => {
    const decodedMessage = polybius("4432423352125413", false);
    expect(decodedMessage).to.equal("th(i/j)nkful");
  });

  it("should translate the letters 'i' and 'j' to '42' when encoding", () => {
    const encodedMessage = polybius("ij");
    expect(encodedMessage).to.equal("4242");
  });

  it("should translate '42' to '(i/j)' when decoding", () => {
    const decodedMessage = polybius("42", false);
    expect(decodedMessage).to.equal("(i/j)");
  });

  it("should ignore capital letters and produce the same result", () => {
    const uppercaseMessage = polybius("A Message");
    const lowercaseMessage = polybius("a message");
    expect(uppercaseMessage).to.equal(lowercaseMessage);
  });

  it("should maintain spaces in the message before and after encoding or decoding", () => {
    const originalMessage = "test for spaces";
    const encodedMessage = polybius(originalMessage);
    const decodedMessage = polybius(encodedMessage, false);
    expect(originalMessage).to.equal(decodedMessage);
  });
});
