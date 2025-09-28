// Name: Yousef Elgendy
// Task 9: Conditional Execution
// Description: Ask user for their age and print "Child" if under 13, "Teenager" if 13 to 19, or "Adult" if 20 or older.

let userAge = prompt("Enter your age :");

if(userAge < 13){
    console.log("Child");
}else if(userAge <= 19){
    console.log("Teenager");
}else {
    console.log("Adult");
}