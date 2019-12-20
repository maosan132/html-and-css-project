// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    if (ar.length <= 1) {
        return 0;
    }
    let matchedSocks = 1;
    let pairOfSocks = 0;
    ar.sort((a,b) => a-b);
    for (let i = 1; i < ar.length; i++) {
        if (ar[i] === ar[i-1]) {
            matchedSocks++;
            if (matchedSocks % 2 === 0) {
                pairOfSocks++;
            }
        } else {
            matchedSocks = 1;
        }
    }
    return pairOfSocks;
};

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20])); //3
console.log(sockMerchant(0,[])); //0
console.log(sockMerchant(1,[2])); //0
console.log(sockMerchant(5,[2,3,4,5,6])); //0
console.log(sockMerchant(15,[2,3,4,5,6,2,3,4,5,6,2,3,4,5,6])); //5
console.log(sockMerchant(10,[2,4,6,5,7,9,1,4,5,4,2,7,4,8,3])); //5
console.log(sockMerchant(20,[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2])); //10



