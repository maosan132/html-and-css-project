// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort((a,b) => a-b);
    let i = 1;
    while (A[i] === A[i-1]) {
        i = i + 2;
    }
    return A[i-1];
}

console.log(solution([3, 1, 1, 4, 4, 6, 7, 7, 6, 2, 0, 0, 2]));