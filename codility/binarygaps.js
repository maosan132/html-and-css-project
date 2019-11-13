// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Finding the greatest binary gap (0s between 1s) for a given integer. 
// Ex: Int 32 which means 1000 in binary has no gaps so the function returns 0, 
// while int 1041 which means 10000010001, has 2 gaps, one is 5 0s gap and another is 3 0s gap,
// so for 1041 the greatest gap is 5 0s. 

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let binStr = (N >>> 0).toString(2);
    let iniPos, finPos, binaryGap, result;
    const arrayGaps = [];
    iniPos = binStr.indexOf('1');
    binStr = binStr.slice(iniPos + 1);
    if (iniPos === -1) {
        return 0;
    } else {
      finPos = binStr.indexOf('1');
      binStr = binStr.slice(finPos + 1);
      if (finPos === -1) {
        return 0;  
      } else {
        while (finPos >= iniPos) {
          binaryGap = finPos - iniPos;
          arrayGaps.push(binaryGap);
          iniPos = 0;
          finPos = binStr.indexOf('1');
          binStr = binStr.slice(finPos + 1);
        };
        arrayGaps.sort();
        if (arrayGaps.length === 0) {
          result = 0;
        } else {
          result = arrayGaps[arrayGaps.length-1];
        }
        return result;
      };
    };
};

console.log(solution(257109));
