// Write your tests here!

const chai = require("chai");
const expect = chai.expect;
const { caesar } = require("../src/caesar");

describe("caesar function", () => {
  it("should encode the message correctly with a positive shift", () => {
    const encoded = caesar("thinkful", 3);
    expect(encoded).to.equal("wklqnixo");
  });

  it("should encode the message correctly with a negative shift", () => {
    const encoded = caesar("thinkful", -3);
    expect(encoded).to.equal("qefkhcri");
  });

  it("should appropraitley handle letters that wrap", () => {
    const decoded = caesar("cheud", 3, false);
    expect(decoded).to.equal("zebra");
  });

  it("should encode and decode with spaces and non-alphabetic symbols", () => {
    const encoded = caesar("This is a secret message!", 8);
    const decoded = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(encoded).to.equal("bpqa qa i amkzmb umaaiom!");
    expect(decoded).to.equal("this is a secret message!");
  });

  it("should return false for invalid shift values", () => {
    const invalidShift1 = caesar("thinkful");
    const invalidShift2 = caesar("thinkful", 99);
    const invalidShift3 = caesar("thinkful", -26);
    expect(invalidShift1).to.be.false;
    expect(invalidShift2).to.be.false;
    expect(invalidShift3).to.be.false;
  });
});
