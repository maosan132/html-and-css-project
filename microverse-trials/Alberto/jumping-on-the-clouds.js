function jumpingOnClouds(c) {

    let paths = [];
    // 1 step at a time
    paths.push('0');
    for (let i = 1; i < c.length-1; i++) {
        if (i === 0) { // we can jump
            paths[0] = paths[0] + i.toString;
        };
    }
    // 2 steps at a time
    paths.push('0');
    for (let i = 1; i < c.length-1; i = i + 2) {
        if (i === 0) { // we can jump
            paths[1] = paths[1] + i.toString;
        };
    }
    return paths;
};

console.log(jumpingOnClouds([0,0,1,0,0,1,0]));

