function sides(literals, ...expressions) {
    // ES6 allows destructuring of arrays into multiple variables
    const [a, p] = expressions;
    // Perform this operation only once and assign to variable
    const s1 = (p + Math.sqrt((p*p)-(16*a)))/4;
    const s2 = (p - Math.sqrt((p*p)-(16*a)))/4;
    // s2 will always be smaller because of the (-/+) above
    return ([s2, s1]);
}

let s1 = 10;
let s2 = 14;

[s1, s2] = [s1, s2].sort();

const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);
