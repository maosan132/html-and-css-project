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

console.log(utopianTree(5));

/*
starts on Spring 

0          1 => CONST H=1
1          2 => spring (doubles) => 2H = 2
2          3 => spring (doubles) + summer (+1) => 2H + 1 => 3
3          6 => spring (doubles) + summer (+1) + spring (doubles) => (2H + 1) * 2 = 6
4          7 => spring (doubles) + summer (+1) + spring (doubles) + summer (+1) =>  ((2H + 1) * 2) + 1
5          14=> spring (doubles) + summer (+1) + spring (doubles) + summer (+1) + spring (doubles) => (((2H + 1) * 2) + 1) * 2
*/