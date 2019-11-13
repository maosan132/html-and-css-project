/*
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
btn5.addEventListener("click", function() {
  let aux;
  aux = btn4.innerHTML;
  btn4.innerHTML = btn7.innerHTML;
  btn7.innerHTML = btn8.innerHTML;
  btn8.innerHTML = btn9.innerHTML;
  btn9.innerHTML = btn6.innerHTML;
  btn6.innerHTML = btn3.innerHTML;
  btn3.innerHTML = btn2.innerHTML;
  btn2.innerHTML = btn1.innerHTML;
  btn1.innerHTML = aux;
});
*/

class Rotator {
    constructor(values) {
    this.values = values;
  }

  rotation() {
    this.values.unshift(this.values.pop());
  }

  round() {
    this.rotation();
    this.render();
  }

  render() {
    const [btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4] = this.values;
    const hashTable = {btn1, btn2, btn3, btn6, btn9, btn8, btn7, btn4};

    for (const key in hashTable) {
      document.getElementById(key).innerHTML = hashTable[key];
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const rotator = new Rotator([1, 2, 3, 6, 9, 8, 7, 4]);
  rotator.render();
  document.getElementById('btn5').addEventListener('click', () => { rotator.round(); });
});
