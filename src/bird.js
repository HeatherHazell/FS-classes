/*
- [ ] Create a totally new class called "Bird".
- Create a new file for the class.
  - Don't forget to export it!
- Create a new file for tests.
  - Don't forget to import the Bird class into this file.
  - Write quality tests.
- Add at least two properties and two methods into the Bird class.
*/

const Animal = require("./animal");

class Bird extends Animal {
  constructor(name, age, sound, legs, breed) {
    super(name, age);
    this.name = "Polly";
    this.legs = 2;
    this.breed = "African Grey";
    this.sound = "Polly wants a cracker";
  }
  getOlder() {
    return (this.age += 28);
  }
  birdYears() {
    return this.age / 9;
  }
}
module.exports = Bird;
