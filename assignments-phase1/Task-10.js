// Name: Yousef Elgendy
// Task 10: Custom Pattern
// Description: Ask the user to select a shape (Triangle or Square) and specify the number of rows, then print the chosen shape using the # symbol.

let shapeNum = prompt("type 1 for draw triangle and any thing else for square");

let numOfRows = prompt("Enter number of rows you need");

if(+shapeNum === 1){
    for(let i = 0; i < numOfRows; ++i){
        let row = "";
        for(let j = 0; j <= i; ++j){
            row += "#";
        }
        console.log(row);
    }
}else{
    for(let i = 0; i < numOfRows; ++i){
        let row = "";
        for (let j = 0; j < numOfRows; ++j){
            row += "#";
        }
        console.log(row);
    }
}