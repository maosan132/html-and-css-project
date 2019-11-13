const n = 248903;//13;
const binStr = n.toString(2);
const maxNumConsOnes = Math.max(...binStr.match(/1+/g).map(v => v.length));

console.log(maxNumConsOnes);