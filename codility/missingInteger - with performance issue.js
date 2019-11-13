// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(compareNumbers);
    const greaterThanZero = A.filter(item => item > 0);
    if (greaterThanZero.length === 0) {
        return 1;
    };
    const max = greaterThanZero[greaterThanZero.length-1];
    let i = 1;
    while (i <= max && greaterThanZero.indexOf(i) !== -1) {
        i++;
    }
    return i;
};
function compareNumbers(a, b) {
    return a - b;
};
let inputArray = [];
for (i = 1; i <= 100; i++) {
    inputArray.push(i);
};
for (i = 102; i <= 200; i++) {
    inputArray.push(i);
};
//solution(inputArray);
//console.log(inputArray.length);
console.log(solution(inputArray));