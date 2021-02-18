/* ----------------------

Note: BEFORE tackling each question below,
read the tests in the test file.

1. Add properties called "legs" and "sound".
2. Add a method called "getOlder" so that it increases
   the age by 1 whenever it is called and then 
   returns the new age.
3. Add a new method called speak that returns the
   sound property whenever it is called.

---------------------- */

class Animal {
  constructor(name, age, legs, sound) {
    this.name = name;
    this.age = 1;
    this.legs = 4;
    this.sound = "tweet!";
  }
  getOlder() {
    age++;
  }
  speak() {
    return this.sound;
  }
}

module.exports = Animal;
