// Traditional function
const traditionalGreeting = function (name) {
  return `Hi ${name}`;
};

// Arrow function, explicit return
const arrowGreetingExplicit = (name) => {
  return `Hi ${name}`;
};

// Arrow function, implicit return
const arrowGreetingImplicit = (name) => {
  return `Hi ${name}`;
};
const arrowGreetingImplicitMultipleParam = (name, lastName) => {
  return `Hi ${name} ${lastName}`;
};

console.log(traditionalGreeting("Batman"));
console.log(arrowGreetingExplicit("Batman"));
console.log(arrowGreetingImplicit("Batman"));
console.log(arrowGreetingImplicitMultipleParam("Bruce", "Wayne"));

//Lexical binding
const fictionalCharacter = {
  name: "Uncle Ben",
  traditionalMessage: function (message) {
    console.log(`${this.name} says: ${message}`);
  },
  arrowMessage: (message) => console.log(`${this.name} says: ${message}`),
};

fictionalCharacter.traditionalMessage(
  "With great power comes great responsability"
);
fictionalCharacter.arrowMessage("Beware of Doctor Octopus");
