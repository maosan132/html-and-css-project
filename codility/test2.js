// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(U, L, C) {
    // write your code in JavaScript (Node.js 8.9.4)
    const matrix = {
        u: [],
        l: []
    };
    const sumC = C.reduce((acc, currVal) => acc + currVal, 0);
    occurrencesOf2 = C.filter(x => x === 2).length;
    if (U + L !== sumC || occurrencesOf2 > U || occurrencesOf2 > L) {
        return 'IMPOSSIBLE';
    };
    matrix.u = C.map(x => {
        if (x === 0) {
            return 0;
        } else if (x === 2) {
            return 1;
        } else {
            return null;
        }
    });
    matrix.l = C.map(x => {
        if (x === 0) {
            return 0;
        } else if (x === 2) {
            return 1;
        } else {
            return null;
        }
    });
    for (let i = 0; i < C.length; i++) {
        if (C[i] === 0 || C[i] === 2) {
            continue;
        } else {
            if (arraySum(matrix.u) < U) {
                matrix.u[i] = 1;
                matrix.l[i] = 0;
            } else {
                matrix.u[i] = 0;
                matrix.l[i] = 1;
            }
        }
    }
    return matrix.u.join() + '\n' + matrix.l.join();
};
const arraySum = (array) => {
    return array.reduce((acc, currVal) => acc + currVal, 0);
}
console.log(solution(5, 3, [2,1,1,0,1,0,1,2]));
console.log('-------------------');
/*
[1,1,0,0,1,0,1,1]
[1,0,1,0,0,0,0,1]
*/
console.log(solution(1, 4, [2,0,2,0,1]));
console.log('-------------------');
console.log(solution(3, 6, [2,2,2,2,1]));
console.log('-------------------');
console.log(solution(4, 4, [2,2,2,2,0]));
console.log('-------------------');
console.log(solution(2, 2, [1,1,1,1,0]));
console.log('-------------------');
