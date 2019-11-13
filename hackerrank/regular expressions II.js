
function regexVar(s) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^Dr\.[a-zA-Z]+$|^Mr\.[a-zA-Z]+$|^Mrs\.[a-zA-Z]+$|^Ms\.[a-zA-Z]+$|^Dr\.[a-zA-Z]+$|^Er\.[a-zA-Z]+$/;
    return re.test(s);
}
let s = 'Mr.X';
console.log(regexVar(s)); // expected true
s = 'Dr.dr.';
console.log(regexVar(s)); //expected false
s = 'ms.abteg';
console.log(regexVar(s)); // expected false
s = 'Mrs.nhsn';
console.log(regexVar(s)); //expected true
s = 'Ms.midmkf';
console.log(regexVar(s)); //expected true
s = 'Er.flkjf';
console.log(regexVar(s)); //expected true