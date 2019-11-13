const onClick = (btn, fn) => btn.addEventListener('click', fn);

const setOp = (btn, op) => {
	onClick(btn, () => res.innerText += op);
}

setOp(btnSub, '-');
setOp(btnSum, '+');
setOp(btnMul, '*');
setOp(btnDiv, '/');
setOp(btn0, '0');
setOp(btn1, '1');
setOp(btnEql,'=');

const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => Math.floor(a / b),
}

onClick(btnEql, () => {
   // split on word boundaries (e.g.between digits and symbols)
    const [op1, operator, op2] = res.innerText.split(/\b/);
    // use parseInt (base 2) to read string as binary integer
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
    // perform the desired operation then convert result into a string (base 2)
    res.innerText = Number(ops[operator](n1,n2)).toString(2);
});

btnClr.addEventListener('click', function () { res.innerText = ''});