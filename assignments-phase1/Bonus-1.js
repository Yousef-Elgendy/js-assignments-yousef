// Name: Yousef Elgendy
// Bonus 1: Calculator
// Description: Ask user for input 2 numbers and and basic operation then print the result.

let firstNum = prompt("Enter first number");
let secondNum = prompt("Enter second number");
let operationSymbol = prompt("Enter operation you want to do from \" + , - , * , \\ \"");

alert(`The result of ${+firstNum} ${operationSymbol} ${+secondNum} = ${eval(`${+firstNum} ${operationSymbol} ${+secondNum}`)}`);
