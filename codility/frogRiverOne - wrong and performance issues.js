// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // checking if X is greater than array A length, if so returns -1 
    if (X > A.length) {
        return -1;
    };
    let frogIsAbleToJump = false;
    const indexIsGreaterOrEqualToX = (element, index, array) => {
        if (element === X && index > X-1) {
          return index;  
        };
    };
    let foundEarliestTime = A.findIndex(indexIsGreaterOrEqualToX);
    while (foundEarliestTime !== -1 && !frogIsAbleToJump) {
        const slicedArray1 = A.slice(0, foundEarliestTime+1);
        const slicedArray2 = A.slice(foundEarliestTime+1);
        for (let i = 1; i <= X; i++) {
            if (slicedArray1.findIndex(element => element === i) === -1) {
                const foundNextX = slicedArray2.findIndex(element => element === X);
                if (foundNextX === -1) {
                    return -1;
                } else {
                    foundEarliestTime = foundEarliestTime + foundNextX + 1;
                }
                break;
            };
            (i === X) ? frogIsAbleToJump = true : frogIsAbleToJump = false;
        };
    };
    return foundEarliestTime;
}

//console.log(solution(9, [2,3,4,1,5,4,6,7,9,3,2])); // return -1
//console.log(solution(9, [2,3,4,1,5,4,6,7,9,3,2,8,4,9,6])); // return 13
//console.log(solution(9, [2,3,4,1,1,4,6,7,9,3,2,8,4,9,6,7,8,5,3,9,7,2])); // return 19
//console.log(solution(5, [1,3,1,4,2,3,5,4])); // return: 6 
//console.log(solution(5, [1,3,5,4,2,5,5,4])); // return: 5
//console.log(solution(6, [1,3,5,4,2,3,5,4,6])); // return: 8
//console.log(solution(7, [1,3,5,7,2,6,4,4,3])); // return: -1
console.log(solution(3, [1,2,2,2,2,2,2,3,2])); // return: 7
