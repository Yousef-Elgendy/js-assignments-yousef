// Name: Yousef Elgendy
// Task 4: Automatic Type Conversion
// Description: Explain type conversion


            /* adding string + number */

console.log("Hi" + 5); // output is "Hi5" of type string because with + operator if one of the operands is string it converts the other to string and concatenate them


            /* multiplying string * number */

// hear we have two choice first one is if the string can be converted to number like "5" so it will convert it to number and multiply it
console.log("5" * 2); // output is 10 of type number
// second choice is if the string can't be converted to number like "Hi" so it will give NaN
console.log("Hi" * 2); // output is NaN of type number 
