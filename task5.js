const matrixThree=[];
for (let i=0;i<3;i++){
    matrixRow=[];
    for (let j=0;j<5;j++) {
        matrixRow.push(j+1);
    }
    matrixThree.push(matrixRow);
}

console.log(matrixThree);