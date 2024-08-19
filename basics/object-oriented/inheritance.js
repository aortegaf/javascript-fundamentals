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
