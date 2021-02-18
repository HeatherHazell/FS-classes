const { expect } = require("chai");
const { isClass } = require("./utilities");
const Cat = require("../src/cat");
const Animal = require("../src/animal");

let cat = null;

describe("Cat", () => {
  beforeEach(() => {
    cat = new Cat();
  });

  describe("The Cat class", () => {
    it("should be a class", () => {
      expect(isClass(Cat)).to.be.true;
    });

    it("should return the sound when called", () => {
      Animal.sound = Cat.sound;
      expect(cat.speak()).to.equal("meow");
    });
  });
});
