const givenArray = [
  {
    firstname: "Andres",
    zipcode: "10011",
  },
  {
    firstname: "Ram",
    zipcode: "10541",
  },
  {
    firstname: "Other",
    zipcode: "10541",
  },
];

const zipCodes = [];

for (let index = 0; index < givenArray.length; index++) {
  const element = givenArray[index].zipcode;

  if (zipCodes.indexOf(element) == -1) {
    zipCodes.push(element);
  }
}

console.log(zipCodes);
