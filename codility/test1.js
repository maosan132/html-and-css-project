// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length <= 5) {
        return false;
    };
    let pos1 = 1;    
    let pos2;
    if (A.length % 2 !== 0) {
        pos2 = (A.length - 1) / 2;
    } else {
        pos2 = A.length / 2;
    };
    let server1 = A.slice(0, pos1);
    console.log(server1);
    let server2 = A.slice(pos1 + 1, pos2);
    console.log(server2);
    let server3 = A.slice(pos2 + 1);
    console.log(server3);
    console.log('------------');
    let sumServer1 = server1.reduce((acc, currVal) => acc + currVal, 0);
    let sumServer2 = server2.reduce((acc, currVal) => acc + currVal, 0);
    let sumServer3 = server3.reduce((acc, currVal) => acc + currVal, 0);
    while (pos2 !== A.length - 2 && sumServer1 !== sumServer2 && sumServer1 !== sumServer3) {
        pos1 = pos1 + 1;
        if (pos2 - pos1 === 1) {
            pos2 = pos2 + 1;
            pos1 = 1;
        }
        server1 = A.slice(0, pos1);
        server2 = A.slice(pos1 + 1, pos2);
        server3 = A.slice(pos2 + 1);
        sumServer1 = server1.reduce((acc, currVal) => acc + currVal, 0);
        sumServer2 = server2.reduce((acc, currVal) => acc + currVal, 0);
        sumServer3 = server3.reduce((acc, currVal) => acc + currVal, 0);
        console.log(A);
        console.log(server1);
        console.log(server2);
        console.log(server3);
        console.log('------------');
        };
    console.log('pos1 = ' + pos1 + ' pos2 = ' + pos2);
    return (sumServer1 === sumServer2 && sumServer1 === sumServer3);
};

console.log(solution([1,3,4,2,2,2,1,1,2]));
//console.log(solution([1,1,1,1,1,1]));
//console.log(solution([1,2,1,2,1,2,1,2,1,2,1,2,1]));