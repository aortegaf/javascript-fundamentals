const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

// find() returns the first element in the provided array that satisfies the provided testing function.
const firstGreaterThan30 = numbers.find((num) => num > 30);
console.log(firstGreaterThan30);

// findIndex() returns the index of the first element in an array that satisfies the provided testing function.
const firstIndexGreaterThan30 = numbers.findIndex((num) => num > 30);
console.log(firstIndexGreaterThan30);
