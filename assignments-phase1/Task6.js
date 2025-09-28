// Name: Yousef Elgendy
// Task 6:  FizzBuzz
// Description: print number from 1 to 100 and do some operation on it 

for (let i = 1; i <= 100; ++i){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz")
    }else if(i % 3 === 0){
        console.log("Fizz");
    }else if(i % 3 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

