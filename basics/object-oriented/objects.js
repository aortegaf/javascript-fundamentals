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
