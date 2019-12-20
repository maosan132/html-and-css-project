// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//that, given an array A of N integers, 
//returns the smallest positive integer (spi) (greater than 0) that does not occur in A.

function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    let obj = {}, spi = 1;
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] > 0) {
            obj[A[i]] = true;
        }
    }
    
    if(!obj[spi]) return 1;
    
    while(obj[spi]) spi++;
    
    return spi;

}
console.log(solution([1,3,6,4,1,2])); //5 [1,1,2,3,4,6]
console.log(solution([1,2,3,4,5,6])); //7
console.log(solution([1,1,1,1])); //2
console.log(solution([1,1,1,1,2,2,2,3,3,3,3,4,4,4,4,6,6,6,6,8,8,8,8])); //5
console.log(solution([-1,-1,-1,-1])); //1
console.log(solution([-9999])); //1
console.log(solution([2])); //1
console.log(solution([1])); //2
console.log(solution([-1000000,1,2,3,4,5,1000000])); //6
console.log(solution([4, 5, 6, 2])); //1
