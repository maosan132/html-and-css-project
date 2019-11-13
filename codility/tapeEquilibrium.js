// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    //total sum of the array A
    const totalSum = A.reduce((accum, currval) => accum + currval, 0);
    let firstPartSum = 0;
    let secondPartSum = 0;
    let P = [];
    for (let i = 1; i < A.length; i++) {
      firstPartSum = firstPartSum + A[i-1];
      secondPartSum = totalSum - firstPartSum;
      P.push(Math.abs(firstPartSum - secondPartSum));
    }
    return Math.min.apply(null, P);
}
console.log(solution([3,1,2,4,3]));
//console.log(solution([3,1]));
//console.log(solution([1,5,3,1,2,4,3]));
//console.log(solution([1,1,1,1,1,1,1]));
//console.log(solution([-2,0,-4,2,1]));

/*
let test = [];
for (let i = 0; i < 10002; i++) {
  test.push(Math.floor(Math.random() * 1000));
}
console.log(solution(test));
*/