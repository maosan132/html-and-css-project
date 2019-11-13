// Write your code here:
const justCoolStuff = (arr1, arr2) => {
    let inCommon = [];
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++){
        resultArray = arr2.filter(x => x === arr1[i]);
        let j = 0;
        while (j < resultArray.length) {
            inCommon.push(resultArray[j]);
            j++;
        }
    }
    return inCommon;
  }
  
  // Feel free to uncomment the code below to test your function
  const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
  
  const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
  
  console.log(justCoolStuff(myStuff, coolStuff))
  // Should print [ 'fruit-by-the-foot', 'skateboards', 'my room' ]