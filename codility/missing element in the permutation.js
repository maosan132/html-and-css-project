// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a, b)=>a - b);
    if (A[0] !== 1) {
        return 1;
    };
    for (let i = 0; i < A.length-1; i++) {
        if (A[i+1] === A[i] + 1) {
            continue;
        } else {
            return A[i] + 1;
        }
    }
    return A.length + 1;
}
//console.log(solution([2,3,1,5,4,7,6,8,9,10,12]));
console.log(solution([2,3,5,4,7,6,8,9,10,11,12]));
//console.log(solution([2,3,1,5,4,7,6,8,9,11]));
//console.log(solution([1,2,3]));
//console.log(solution([1,2,3,4,5,6]))
//console.log(solution([1, 2, 3, 4, 5, 6, 8, 9]))
