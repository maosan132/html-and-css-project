
function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /(?<=\/proxy\/).*/;
    return re.exec(s)[0];
    
}
let s = 'http://localhost:8000/proxy/http://httpbin.org/get';
console.log(regexVar(s)); // expected true
