// Object definition
const person = {
  name: "Andres",
  age: 25,
  occupation: "Software Engineer",
};

console.log(person);

// Object definition using function
function Person(name, age, occupation) {
  this.name = name;
  this.age = age;
  this.occupation = occupation;
}

const andres = new Person("Andres", 25, "Software");

delete andres.age;
console.log(andres);

// Object definition using class (with constructor function)
class PersonClass {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }
  sayHi() {
    console.log(`Hi my name is ${this.name} and I'm ${this.age} years old`);
  }
}

const felipe = new PersonClass("Felipe", 25);
felipe.sayHi();

// Inheritance
class Animal {
  constructor(name, type) {
    (this.name = name), (this.type = type);
  }
  makeNoise() {
    console.log("Animal makes noise");
  }
}

class Dog extends Animal {
  constructor(name, type, race) {
    super(name, type);
    this.race = race;
  }
  makeDogNoise() {
    console.log(`${this.name} makes noise`);
  }
}

const doggy = new Dog("Doggy", "Canine", "Pit Bull");
doggy.makeNoise();
doggy.makeDogNoise();
