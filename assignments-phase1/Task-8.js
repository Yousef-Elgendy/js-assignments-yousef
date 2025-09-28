// Name: Yousef Elgendy
// Task 8: Chessboard (Dynamic)
// Description: Print an grid like a chessboard using # and spaces with size variable

let size = 10;
for (let i = 0; i < size; ++i){
    let row = "";
    for (let j = 0; j < size; ++j){
        if(i % 2 === 0){
            row += (j % 2 === 0)? "###" : "   ";
        }else{
            row += (j % 2 === 0)? "   " : "###";
        }
    }
    console.log(row);
}