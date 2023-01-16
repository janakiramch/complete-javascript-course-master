console.log("Hello world");

let myCountry = "India";
let myContinent = "Asia";
let myCountryPopulation = "1390M";

console.log(
  "my country is " +
    myCountry +
    " from continent " +
    myContinent +
    " with population of " +
    myCountryPopulation
);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / (heightJohn * heightJohn);

const higherBmi = bmiMark - bmiJohn;

console.log(bmiMark, bmiJohn);
console.log("Higher BMI is " + bmiMark);
