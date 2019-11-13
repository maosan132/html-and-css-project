// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(compareNumbers);
    const greaterThanZero = A.filter(item => item > 0);
    let missingInt = -1;
    if (greaterThanZero.length === 0) {
        return 1;
    };
    if (greaterThanZero[0] !== 1) {
        return 1;
    } else {
        for (let i = 1; i < greaterThanZero.length; i++) {
            if (greaterThanZero[i] - greaterThanZero[i-1] > 1) {
                missingInt = greaterThanZero[i-1] + 1;
                break;
            }
        };
        if (missingInt === -1) {
            missingInt = greaterThanZero[greaterThanZero.length-1] + 1;
        };
    };
    return missingInt;
};
function compareNumbers(a, b) {
    return a - b;
};

let inputArray = [];
for (i = 1; i <= 100000; i++) {
    inputArray.push(i);
};


console.log(solution(inputArray));