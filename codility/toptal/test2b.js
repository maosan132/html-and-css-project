function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const places = Array.from(new Set(A));
    const values = Array.from(new Set(A));
    const last_position = [];
    for(let i = 0; i < A.length; i++){
        const key = A.keys(values[i]);
        last_position[key[0]] = i;
        if(places.length !== 0){
            places.splice(key[0], 1)
            if(places.length === 0){
                return Math.max(...last_position) - Math.min(...last_position) + 1;
            }
        }
    }

}
console.log(solution([7,3,7,3,1,3,4,1]));
console.log(solution([2,1,1,,3,2,1,1,3]));