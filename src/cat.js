/* ----------------------

Note: BEFORE tackling each question below,
write related tests in the test file.

1. Update the sound property to "meow".
2. Create one additional property (your choice).
3. Update the getOlder method so that it
   increases the age by cat years each time
   it is called. Cat years are a bit complex:
   cats are 15 years by age 1, 24 years by age 2,
   and then only increase by 4 years every
   subsequent year.
4. Create one additional method (your choice).
  
      it ('should do this when asked', () => {
      expect(cat.giveCommand()).to.equal("roll over");
       });
---------------------- */

const Animal = require("./animal");

class Cat extends Animal {
  constructor(name, breed, age, legs, sound) {
    super(age, legs, name);
    this.breed = "Sphynx";
    this.sound = "meow";
  }
  getOlder() {
    if ((age = 1)) {
      catYears = 15;
      if ((age = 2)) {
        catYears = 24;
        if (age > 2) {
          catYears = age + 4;
        }
      }
    }
  }
  // giveCommand(){
  //    return "roll over";
  // }
}
module.exports = Cat;
