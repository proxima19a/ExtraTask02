// Debug with console.log

let sum=0;
// debugger;
console.log('initial sum',sum);
const numberOfElements=10;
for (let i=1;i<numberOfElements;i++){
    // console.log('i/sum',i,sum);
    // debugger;
    sum+=i;
}
const theHalfOfSum=sum/2;
console.log('theHalfOfSum',theHalfOfSum);
