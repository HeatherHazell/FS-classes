const { expect } = require("chai");
const { isClass } = require("./utilities");
const Bird = require("../src/bird");
const Animal = require("../src/animal");

let bird = null;

describe("Birds", () => {
  beforeEach(() => {
    bird = new Bird();
  });

  let bird = null;

  describe("The Bird class", () => {
    it("should be a class", () => {
      expect(isClass(Bird)).to.be.true;
    });

    it("should have properties for name, legs, and breed", () => {
      expect(bird.hasOwnProperty("name")).to.equal(true);
      expect(bird.hasOwnProperty("legs")).to.equal(true);
      expect(bird.hasOwnProperty("breed")).to.equal(true);
    });

    it("should have have preset properties for sound and legs", () => {
      expect(bird.sound).to.equal("Polly wants a cracker");
      expect(bird.legs).to.equal(2);
    });
  });

  describe("The birdYears method", () => {
    it("should exist on the Bird prototype", () => {
      expect(Bird.prototype.birdYears).to.exist;
    });

    it("should divide by 9 each year aged", () => {
      bird.birdYears();
      expect(bird.age).to.equal(3);
    });
  });
});
