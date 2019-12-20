function isPossible(a, b, c, d) {
    // Write your code here
    let isPossible = 'No'; 
    let A, B;
    // X way 
    let resultX = a + b;
    let resultY = b;
    while (resultX <= c) {
        if (resultX === c && resultY === d) {
            isPossible = 'Yes';
        } else {
            A = resultX;
            resultX = A + b;
        }
    };
    // Y way 
    resultX = A;
    resultY = A + b;
    while (resultY <= d) {
        if (resultX === c && resultY === d) {
            isPossible = 'Yes';
        } else {
            B = resultY;
            resultY = a + B;
        }
    };
    return isPossible;
}

console.log(isPossible(1,4,5,9));