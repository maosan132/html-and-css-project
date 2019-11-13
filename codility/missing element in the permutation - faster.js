// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
/* Task Description
   An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)],
   which means that exactly one element is missing. Your goal is to find that missing element.    
/*  Assumptions:
    - N is an integer within the range [0..100,000];
    - the elements of A are all distinct;
    - each element of array A is an integer within the range [1..(N + 1)].
*/
    // declaring (i)initial and (f)inal index and (m)edian
    let i, f, m;
    // sort the array 
    A.sort((a, b)=>a - b);
    //check if the first element is not 1 and then return 1
    if (A[0] !== 1) {
        return 1;
    };
    //check if the length of array A is 1, since it passed the previous if, the element is the number 1
    if (A.length === 1) {
        return 2
    } else {
        i = 0;
        f = A.length - 1;
        m =  Math.ceil((f - i) / 2);
        while (f - i > 0 && f < A.length) {
            if (A[m] - A[m-1] === 2 && A[m] - m ===2) {
            // found it    
                return A[m-1] + 1;
            } else if (A[m] - A[m-1] === 1 && A[m] - m === 1) {
            // cut to the right
                i = m + 1;
                m =  Math.ceil((f - i) / 2) + i;
            } else {
            // cut to the left
                f = m - 1;
                m =  Math.ceil((f - i) / 2) + i;
            }
        };
        if (i > f && m < A.length) {
            return A[A.length-1] + 1;
        } else if (m >= A.length - 1) {
            if (A[m] - A[m-1] === 2 && A[m] - m === 2) {
                // found it    
                return A[m-1] + 1;
            } else {
                return A[A.length-1] + 1;
            }
        } else {
            return A[m] - 1;
        }
    }
}
//console.log(solution([1,2,3,4,5,6,8,9,10,11,12,13,14,15]));
//console.log(solution([2,3,1,5,4,7,6,8,9,10,12]));
//console.log(solution([2,3,5,4,7,6,8,9,10,11,12]));
//console.log(solution([2,3,1,5,4,7,6,8,9,11]));
//console.log(solution([1,2,3]));
//console.log(solution([1,2,3,4,5,6]))
console.log(solution([1, 2, 3, 4, 5, 6, 8, 9]))
