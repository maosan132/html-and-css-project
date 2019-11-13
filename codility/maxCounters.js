// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayOfCounters = (new Array(N)).join(',').split(',').map(v => 0);   
    A.forEach(element => {
        if (element >= 1 && element <= N) {
            arrayOfCounters[element-1]++;
        } else {
            arrayOfCounters = arrayOfCounters.map(v => Math.max(...arrayOfCounters));
        }
    });
    return  arrayOfCounters;
};

const n = Math.floor(Math.random() * 10000) + 1;
//console.log(N);
const m = Math.floor(Math.random() * 10000) + 1;
let array = (new Array(m)).join(',').split(',').map(v => Math.floor(Math.random() * (n+1)) + 1);   

/*
console.log(solution(5,[3,4,4,6,1,4,4])); //[3, 2, 2, 4, 2]
console.log(solution(5,[1,1,1,1,1,1,1])); //[7, 0, 0, 0, 0]
console.log(solution(6,[1,1,6,1,7,1,1])); //[5, 3, 3, 3, 3, 3]
console.log(solution(5,[2,6,5])); //[1, 1, 1, 1, 2]
*/
const resultArray = solution(n,array);
console.log(resultArray.length); // checking performance

