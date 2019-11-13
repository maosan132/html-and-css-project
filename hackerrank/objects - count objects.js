function getCount(objects) {
    let j = 0;
    for (let i = 0; i < objects.length; i++) {
        if (objects[i].x === objects[i].y) {
            j++;
        }
    }
    return j;
}

console.log(getCount([{x:1, y:1}, {x:2, y:2}, {x:3, y:3}, {x:3, y:3}, {x:4, y:5}]));