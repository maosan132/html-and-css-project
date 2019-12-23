
// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let likedAd = 2; // Day 1
    let counter = 2;
    for (i = 2; i <= n; i++) {
        likedAd =  Math.floor(likedAd * 3 / 2);
        counter += likedAd;
    }
    return counter;
}

console.log(viralAdvertising(5));

/*

Day Shared Liked Cumulative
1      5     2       2 => CONST = 2
2      6     3       5 => CONST + Floor(likedAd * 3 / 2)  => 2 + Floor(2 * 3 / 2) => 2 + 3 => 5
3      9     4       9 => CONST + Floor(likedAd * 3 / 2) => 2 + Floor(5 * 3 / 2) => 9
4     12     6      15
5     18     9      24


*/
