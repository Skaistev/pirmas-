console.log (Number.MAX_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.parseInt(5));
console.log(Number.parseInt('5'));
console.log(Number.parseInt('7.25'));
console.log(Number.parseFloat('7.25'));

console.log(parseInt(5));
console.log(parseInt('5'));
console.log(parseInt('7.25'));
console.log(parseFloat('7.25'));

console.log('----')
console.log(Number.isFinite (5,5));
console.log(Number.isFinite (NaN));
//isfinite - padeda atskirti (-) infinity, nan. 

console.log(Number.isInteger(5));
console.log(Number.isInteger('5'));
console.log(Number.isInteger('7.25'));
console.log(Number.isInteger('7.25'));

console.log ('----');

console.log(Number.isNaN(5));


console.log(parseInt(5));
console.log(parseInt('123'));
console.log(parseInt('123.2222'));
console.log(parseInt('labas'));
console.log(parseInt(true));
console.log(parseInt('123labas'));
console.log(parseInt('123,155labas'));
console.log(parseInt('123.155labas'));
console.log(parseInt('123labas155'));
console.log(parseInt('labas.155'));
console.log ('parsefloat')
console.log(parseFloat(5));
console.log(parseFloat('123'));
console.log(parseFloat('123.2222'));
console.log(parseFloat('labas'));
console.log(parseFloat(true));
console.log(parseFloat('123labas'));
console.log(parseFloat('123,155labas'));
console.log(parseFloat('123.155labas'));
console.log(parseFloat('123labas155'));
console.log(parseFloat('labas.155'));
console.log (parseFloat([]))

function atpazintiSkaiciu (text) {

return NaN;
}


console.log ('----');

console.log ((13548852).toFixed());

console.log ((13548852).toFixed(2));

console.log ('(0.1 + 0.2).toFixed(10)',(0.1 + 0.2).toFixed(10));


console.log ('parseFloat((0.1 + 0.2).toFixed(10)',parseFloat((0.1 + 0.2).toFixed(1)));
console.log ('parseFloat((0.1 + 0.2).toFixed(10)).toFixed(1)',parseFloat((0.1 + 0.2).toFixed(1)).toFixed(1));

const a = 3.1415

//pakeicia i string, skaicius - kiek po kablelio
const b = a.toFixed(2)

console.log (a,typeof a);
console.log (b, typeof b);

const c = b+b;
console.log (c);


// padaro is string - skaiciu ir tik sveikas dalis parodo
const ca = parseInt(b)+parseInt(b);
console.log (ca);
// padaro is string - skaiciu ir visa skaiciu su desimtimis 
const d = parseFloat(b) + parseFloat(b);
console.log (d);

console.log(Number.isFinite (5,5));
console.log(Number.isFinite (NaN));
//isfinite - padeda atskirti (-) infinity, nan. 

const max1 = Math.max();
console.log(max1);



