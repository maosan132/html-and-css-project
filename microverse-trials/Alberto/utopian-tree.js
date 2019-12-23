// Complete the utopianTree function below.
function utopianTree(n) {
    if (n === 0) return 1;
    let H = 0;
    for(let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            H++;
        } else {
            H = 2 * H;
        }
    }
    return H;
}

console.log(utopianTree(4));
console.log(utopianTree(5));
console.log(utopianTree(6));
console.log(utopianTree(7));

/*
CONST H=1
X
00   1 => H
01   2 => 2H 
02   3 => 2H + 1
03   6 => (2H + 1) * 2 => 4H + 2;
04   7 => ((2H + 1) * 2) + 1 => 4H + 3
05   14=> (((2H + 1) * 2) + 1) * 2 => 8H + 6
06   15=> ((((2H + 1) * 2) + 1) * 2) + 1 => 8H + 7
07   30=> (((((2H + 1) * 2) + 1) * 2) + 1) * 2 => 16H + 14
08   31=> ((((((2H + 1) * 2) + 1) * 2) + 1) * 2) + 1 => 16H + 15
09   62=> (((((((2H + 1) * 2) + 1) * 2) + 1) * 2) + 1) * 2 => 32H + 30
10   63=> ((((((((2H + 1) * 2) + 1) * 2) + 1) * 2) + 1) * 2) + 1 => 32H + 31

Y = 
*/