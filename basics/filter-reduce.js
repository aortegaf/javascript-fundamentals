// filter() creates an array copy filtered down to just the elements from the given array that pass the test implemented by the provided function.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter((num) => num % 2 == 0);
const greaterThanFiveNumbers = numbers.filter((num) => num > 5);

console.log(numbers);
console.log(evenNumbers);
console.log(greaterThanFiveNumbers);

// reduce() executes a function over each element of the array "accumulating" the result to reduce the array to a single value or object
const sum = numbers.reduce((sum, num) => (sum += num), 0);
console.log(sum);

const words = ["apple", "banana", "hello", "apple"];
const wordsFrecuency = words.reduce((frecuencies, word) => {
  if (!frecuencies[word]) {
    frecuencies[word] = 1;
  } else {
    frecuencies[word]++;
  }
  return frecuencies;
}, {});

console.log(wordsFrecuency);
