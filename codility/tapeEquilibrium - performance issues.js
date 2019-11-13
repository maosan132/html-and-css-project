// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //building P array
    let firstPart, secondPart; // arrays 
    let firstPartSum, secondPartSum;
    let P = [];
    for (let i = 1; i < A.length; i++) {
        firstPart = A.slice(0, i);
        firstPartSum = firstPart.reduce((accum, currval) => accum + currval, 0);
        secondPart = A.slice(i);
        secondPartSum = secondPart.reduce((accum, currval) => accum + currval, 0);
        P.push(Math.abs(firstPartSum - secondPartSum));
    }
    P.sort((a, b) => a-b);
    return P[0];
//    console.log(P);
//    console.log(P[0]);
}
//solution([3,1,2,4,3]);
//solution([3,1]);
//solution([1,5,3,1,2,4,3]);
//solution([1,1,1,1,1,1,1]);
//solution([-2,0,-4,2,1]);
let test = [];
for (let i = 0; i < 10002; i++) {
  test.push(Math.floor(Math.random() * 1000));
}
solution(test);

