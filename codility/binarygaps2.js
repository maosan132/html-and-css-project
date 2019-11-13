// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Finding the greatest binary gap (0s between 1s) for a given integer. 
// Ex: Int 32 which means 1000 in binary has no gaps so the function returns 0, 
// while int 1041 which means 10000010001, has 2 gaps, one is 5 0s gap and another is 3 0s gap,
// so for 1041 the greatest gap is 5 0s. 

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const binStr = (N >>> 0).toString(2);
    //extracting arrays of 1s. If there are less than 2 elements in the arrays so there is no binary gap 
    //and then return 0
    if (binStr.match(/(1+)/g) === null) {
        return 0;
    };
    const matchOnesArrayLen = binStr.match(/(1+)/g).length;
    if ( matchOnesArrayLen < 2) {
        return 0;
    };
    //extracting arrays of 0s. Checking if the first and last elements fo the binary string are 0, 
    //if so they are pulled from the array
    const arrayOfZeros = binStr.match(/(0+)/g);
    if (binStr[0] === '0') {
        arrayOfZeros.shift();
    };
    if (binStr[binStr.length - 1] === '0') {
        arrayOfZeros.pop();
    };
    const arrayOfGaps = arrayOfZeros.map(element => element.length);
    arrayOfGaps.sort();
    return arrayOfGaps[arrayOfGaps.length - 1];
};

console.log(solution(16513));
switch (key) {
    case value:
        
        break;

    default:
        break;
}