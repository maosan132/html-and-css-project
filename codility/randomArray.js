const randomArray = (min, max) => {
  return (new Array(max-min))
    .join(',').split(',')
    .map((v,i) => [Math.random(), min + i])
    .sort().map(v => v[1]);
}

const arithSeqArray = (min, max) => {
  return (new Array(max-min+1))
    .join(',').split(',')
    .map((v, i) => min + i);
}

//console.log(randomArray(1, 60));
console.log(arithSeqArray(1,100000));