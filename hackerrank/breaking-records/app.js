// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let countingUp = 0;
    let countingDown = 0;
    for (let i = 1; i < scores.length; i++) {
        if (highestScore < scores[i]) {
            highestScore = scores[i];
            countingUp++;
        }
        if (lowestScore > scores[i]) {
            lowestScore = scores[i];
            countingDown++;
        }
    }
    const arr = [];
    arr.push(countingUp);
    arr.push(countingDown);
    return arr;
    // console.log(`${countingUp} ${countingDown} `);
}
const result = breakingRecords([10,5,20,20,4,5,2,25,1]);
console.log(result);
console.log(result.join(' ') + '\n');

/*
scores[8]=5 - 20 - 20 - 4 - 5 - 2 - 25 - 1

highestScore = 10 - 20 - 25
lowestScore = 10 - 5 - 4 - 2 - 1

countingUp = 0 - 1 - 2
countingDown = 0 - 1 - 2 - 3 - 4


*/