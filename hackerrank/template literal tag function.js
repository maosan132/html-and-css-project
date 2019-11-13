const name = 'Brandon';
const age = 26;
 
function greet(){
  console.log(arguments[0]);
  // ["I'm ", ". I'm ", " years old."]
 
  console.log(arguments[1]);
  // Brandon
 
  console.log(arguments[2]);
  // 26
  console.log(arguments[3]);
  //undefined
}
greet`I'm ${name}. I'm ${age} years old.`;