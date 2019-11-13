Array.prototype.getUnique = function() {
    const o = {}, a = [];
    let i, e
    for (i = 0; e = this[i]; i++) {
        if (isNaN(o[e])) {
            o[e] = 1;
        } else {
            o[e]++;
        }
    };
    //for (e in o) {a.push (e)};
    return o;
};
   
console.log([3,4,4,6,1,4,4].getUnique());

