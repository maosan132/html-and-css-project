function jumpingOnClouds(c) {
    let i = 0;
    let jumps = 0;
    while (i < c.length-1) {
        if (c[i+2] !== 0) {
            if (c[i+1] !== 0) {
                console.log("invalid input");
                return -1;        
            } else {
                jumps++;
                i = i + 1;
            }
        } else {
            jumps++;
            i = i + 2;
        }
    }
    return jumps;
};

console.log(jumpingOnClouds([0,1,0])); // expect 1
console.log(jumpingOnClouds([0,0,1,0,0,1,0])); // expect 4
console.log(jumpingOnClouds([0,0,0,0,0,0,0])); // expect 3
console.log(jumpingOnClouds([0,0,0,0,0,0])); // expect 3

