function solution(A) {
    let start = 0, end = start + 1, obj = {};

    for (let i = 0; i < A.length; i++) {
        if (A[start] == A[i] && i != 0) {
            start++;
            end = start + 1;
        } else {
            if (!obj[A[i]]) {
                end = i;
            }
        }
        obj[i] = (A[i]);
    }
    return end - start + 1;
};
console.log(solution([7,3,7,3,1,3,4,1]));
console.log(solution([2,1,1,,3,2,1,1,3]));