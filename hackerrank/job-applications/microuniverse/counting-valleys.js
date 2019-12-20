// Complete the countingValleys function below.
function countingValleys(n, s) {
    const garysPath = s.split('');
    let countValleys = 0;
    let seaLevelRef = 0;
    let previousSeaLevelRef;
    for (let i = 0; i < n; i++) {
        previousSeaLevelRef = seaLevelRef;
        garysPath[i] === 'U' ? seaLevelRef++ : seaLevelRef--;
        if (seaLevelRef === 0 && previousSeaLevelRef === -1) {
            countValleys++;
        }
    }
    return countValleys;
}
console.log(countingValleys(8,'UDDDUDUU')); //1
console.log(countingValleys(16,'UDDDUDUUUDDDUDUU')); //2
console.log(countingValleys(10,'DDDDUUDUUU')); //1
console.log(countingValleys(30,'DDDUUUDDDDUUUUDDDUUUUUDDDDDUUU')); //4