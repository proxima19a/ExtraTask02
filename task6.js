const matrix = [
   [ 1, 2, 3 ],
   [ 4, 5, 6 ],
   [ 7, 8, 9 ],
];
let newMatrix=[];

for (let i=0;i<matrix.length;i++) {
    newMatrix=newMatrix.concat(matrix[i]);
};
console.log('new', newMatrix);

// spread
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// const flatArray = matrix.reduce((acc, array) => {
//   return [...acc, ...array];
// }, []);

// console.log("flatArray", flatArray);