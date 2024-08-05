// map() creates a new array populated with the results of calling a provided function on every element in the original array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);

console.log(numbers);
console.log(squaredNumbers);

// forEach() executes a provided function once for each array element.
const colors = ["red", "blue", "yellow"];
colors.forEach((color) => console.log(color));

/* ---------------------------------------------------------------------------------------------------------------
Fahrenheit to Celsius Conversion:
Create a program that takes an array of temperatures in Fahrenheit as input and converts them to Celsius using the formula: C = 5/9 * (F - 32).
*/

const fahrenheitTemperatures = [32, 68, 95, 104, 212];
const celsiusTemperatures = fahrenheitTemperatures.map(
  (f) => (5 / 9) * (f - 32)
);

console.log(fahrenheitTemperatures);
console.log(celsiusTemperatures);

/* ---------------------------------------------------------------------------------------------------------------
Sum of Elements in an Arrays
Create a program that takes an array of numbers as input and calculates the sum of all elements in that array.
*/

//using numbers array declared on top
let sum = 0;
numbers.forEach((num) => (sum += num));

console.log(sum);
