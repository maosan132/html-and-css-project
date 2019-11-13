// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) {
        return [];
    }
    for (let i = 1; i <= K; i++) {
        A.unshift(A.pop());
    }
    return A;
}
console.log(solution([1,2,3,4],2))