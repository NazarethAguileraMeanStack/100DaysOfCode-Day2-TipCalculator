const prompt = require("prompt-sync")({sigint: true});
const TipCalculator = require("./TipCalculator.js");

console.log("Welcome to Tip Calculator");

const tipCalculator = new TipCalculator();
tipCalculator.Bill = prompt("What was the total bill? ");
tipCalculator.Tip = prompt("What percentage tip would you like to give? ");
tipCalculator.NumOfPeople = prompt("How many people to split the bill? ");
let totalBill = tipCalculator.calcTotalBill();
let amountPerPerson = tipCalculator.calcAmountPerPerson();

console.log(`\nTotal Bill with Tip Included: ${tipCalculator.format(totalBill)}`);
console.log(`Each person should pay: ${tipCalculator.format(amountPerPerson)}`);
console.log("\nClosing app...");