const regex = /^Dr\.[a-z]+|^Mr\.[a-z]+|^Mrs\.[a-z]+|^Ms\.[a-z]+|^Dr\.[a-z]+|^Er\.[a-z]+/ig;
const str = `Mr.xAdf.`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}