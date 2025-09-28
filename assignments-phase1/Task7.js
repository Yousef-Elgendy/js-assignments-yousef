// Name: Yousef Elgendy
// Task 7:  Chessboard (Basic)
// Description:  Print an 8×8 grid like a chessboard using # and spaces.

for(let i = 0; i < 8; ++i){
    let row = "";
    for(let j = 0; j < 8; ++j){
        if(i % 2 === 0){
            if(j % 2 === 0){
                row += "###";
            }else{
                row += "   ";
            }
        }else{
            if(j % 2 === 0){
                row += "   ";
            }else{
                row += "###";
            }
        }
    }
    console.log(row);
}
