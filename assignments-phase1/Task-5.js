// Name: Yousef Elgendy
// Task 5: Looping a Triangle 
// Description: print a triangle shape

for (let i = 0; i <  7; ++i) {
    let row = "";
    for (let j = 0; j <= i; ++j){
        row += "#";
    }
    console.log(row);
}