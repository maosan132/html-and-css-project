// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //sorting array 
    A.sort((a, b) => a - b);
    // Getting the array which is the evaluation of each number subtracted by its index
    let resultArray = A.map((currval, index, array) => index > 0 ? currval - array[index-1] : currval);
    //Filtering the array searching numbers greater than 1. It it's true the array is not a permutation;
    resultArray = resultArray.filter(x => x !== 1);
    return resultArray.length === 0 ? 1 : 0; 
}
console.log(solution([1,4,2,3]));
/*
const array1 = [];
for (let i = 0; i < 99999; i++) {
    array1.push(i+1);
};
console.log(solution(array1));
*/
//console.log(solution([1,1]));
