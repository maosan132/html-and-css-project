function solution(N){
    let l = 0, r = 1, x, result = '';
    
    x = (N > 0) ? (N - 1).toString(2) : (-N).toString(2);

    for (let i = x.length-1; i >= 0; i--){
        if (x[i] == (N > 0 ? '0' : '1')) {
            [l, r] = [2 * l - r, r]
            result = result + 'L';
        } else {
            [l, r] = [l, 2 * r - l]
            result = result + 'R';
        }
    }
    return result;
}  

console.log(solution(-11));