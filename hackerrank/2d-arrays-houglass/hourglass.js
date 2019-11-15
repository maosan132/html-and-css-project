'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    };
    let sum = -9999999;
    for (let l = 0; l < arr.length-2; l++) { //reading lines
        for (let c = 0; c < arr.length-2; c++) { // reading columns
//            console.log('############################')
//            console.log(arr[l][c] + ' ' + arr[l][c+1] + ' ' + arr[l][c+2] + '\n'+'  ' + arr[l+1][c+1] + '  \n' + arr[l+2][c] + ' ' + arr[l+2][c+1] + ' ' + arr[l+2][c+2] + '\n');
            if (sum < arr[l][c] + arr[l][c+1] + arr[l][c+2] + arr[l+1][c+1] + arr[l+2][c] + arr[l+2][c+1] + arr[l+2][c+2]) {
                sum = arr[l][c] + arr[l][c+1] + arr[l][c+2] + arr[l+1][c+1] + arr[l+2][c] + arr[l+2][c+1] + arr[l+2][c+2];
            }
        };
    }
    console.log(sum);
}
