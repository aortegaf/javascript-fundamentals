const array = [1, 2, 3];

// Array copy
const arrayCopy = [...array];
console.log(arrayCopy);

// Array combination
const arrayToCombine = [4, 5, 6];
const arrayCombination = [...array, ...arrayToCombine];
console.log(arrayCombination);

// Array copy with additional data
const arrayWithAddition = [...array, 4, 5, 6];
console.log(arrayWithAddition);

// Passing elements to a function as individual elements
const sum = (a, b, c) => a + b + c;
const numbersToSum = [5, 10, 15];
console.log(sum(...numbersToSum));
