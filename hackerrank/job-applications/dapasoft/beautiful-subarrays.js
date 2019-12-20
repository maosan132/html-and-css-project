function minSum(num, k) {
    // Write your code here
    const sortedArray = num.sort((a,b) => b-a);
    const reducedArray = sortedArray.map((v,i) => {
        if (i < k) {
            return Math.ceil(v / 2);
        } else {
            return v;
        }
    });
    return reducedArray;
}

console.log(minSum([10,20,7],4));