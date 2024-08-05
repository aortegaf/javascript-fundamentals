function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const inner = outerFunction(); //outerFunction returns innerFunction thats being saved in "inner" const
inner(); //inner() executes innerFunction() with the variables available on outerFunction's context

// ---------------------------------------------------------------------------------------------------------------
function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    console.log(counter);
  };
}

//Each createCounter() function creates a different context, one saved in counter1 and the other one in counter 2
const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();
counter2();
counter2();

// ---------------------------------------------------------------------------------------------------------------
function sayHi() {
  let message = "Hello ";

  function inner(name) {
    console.log(message + name);
  }

  return inner;
}

const firstGreeting = sayHi();
const secondGreeting = sayHi();

firstGreeting("Andrés");
secondGreeting("Felipe");
