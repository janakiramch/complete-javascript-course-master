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

let higherBmi = bmiMark - bmiJohn;

console.log(`BMI of mark is ${bmiMark}`);
console.log(`BMI of John is ${bmiJohn}`);

if (higherBmi > 0) {
  higherBmi = bmiMark;
  console.log(`Mark's BMI ${bmiMark} is higher than John's`);
} else {
  higherBmi = bmiJohn;
  console.log(`John's BMI ${bmiJohn} is higher than Mark's`);
}

const scoreDolphin = (96 + 108 + 89) / 3;
const scoreKolas = (88 + 91 + 110) / 3;

console.log(`Dolphins score is ${scoreDolphin} , Kolas score is ${scoreKolas}`);

if (scoreDolphin > scoreKolas) {
  console.log("Dolphins win the trophy");
} else if (scoreKolas > scoreDolphin) {
  console.log("Kolas win the trophy");
} else {
  console.log("Match Drawn. Both win the trophy");
}

const bill = 275;
const tip = 50 <= bill && bill <= 300 ? 0.15 * bill : 0.2 * bill;
console.log(`Bill is ${bill} and Tip is ${tip} and total is ${bill + tip}`);
