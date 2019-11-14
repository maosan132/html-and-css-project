// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arrayOfCounters = Array.apply(null, Array(N)).map(v => 0);
    let offset = 0;
    let maxCounter = 0;
     
    A.forEach(element => {
        if (element >= 1 && element <= N) {
            arrayOfCounters[element-1] = Math.max(offset, arrayOfCounters[element-1]) + 1;
            maxCounter = Math.max(arrayOfCounters[element-1], maxCounter);
        } else {
            offset = maxCounter;
        }
    });
    arrayOfCounters.map((e, i) => {
        if (e < offset) {
            arrayOfCounters[i] = offset;
        }
    })
    return  arrayOfCounters;
};

/*
const n = Math.floor(Math.random() * 10000) + 1;
//console.log(N);
const m = Math.floor(Math.random() * 10000) + 1;
let array = (new Array(m)).join(',').split(',').map(v => Math.floor(Math.random() * (n+1)) + 1);   
*/
console.log(solution(5,[3,4,4,6,1,4,4])); //[3, 2, 2, 4, 2]
console.log(solution(5,[1,1,1,1,1,1,1])); //[7, 0, 0, 0, 0]
console.log(solution(6,[1,1,6,1,7,1,1])); //[5, 3, 3, 3, 3, 3]
console.log(solution(5,[2,6,5])); //[1, 1, 1, 1, 2]
console.log(solution(6,[1,3,4,7,4,3,6,7,4,1,2,7,4,2,7,5,4,7,5,4,7])); //[6,6,6,6,6,6]
/*
let d = new Date();
console.log(d.getSeconds() + '.' + d.getMilliseconds());
const resultArray = solution(n,array);
let d2 = new Date();
console.log(d2.getSeconds() + '.' + d2.getMilliseconds());
console.log(resultArray.length); // checking performance
*/