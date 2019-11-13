const getMaxLessThanK = (n, k) => {
    let result = 0;
    let resultAnt = 0;
    let currBitWise = 0;
    for (let i = 1; i <= n ; i++){
        for (let j = i + 1; j <= n; j++) {
            currBitWise = i & j;
            if (currBitWise < k && currBitWise > resultAnt) {
                result = currBitWise;
            };
            resultAnt = result;
        };
    };
    return result;
};
console.log(getMaxLessThanK(8, 4));