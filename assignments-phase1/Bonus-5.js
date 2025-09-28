// Name: Yousef Elgendy
// Bonus 5: Pattern – Pyramid
// Description: Print an inverted pyramid with #

let pyramidRows = 5;

for(let i = 0; i < pyramidRows; ++i){
    let row = "";
    for(let j = 0; j < i; ++j){
        row += " ";
    }
    for(let k = i; k < pyramidRows; ++k){
        row += "#";
    }
    console.log(row);
}
