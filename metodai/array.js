const marks = [10,8,6,4,2];

console.log (marks);
console.log(marks.includes (10));
console.log (marks.includes(7));

console.log(marks.indexOf(7));
console.log(marks.indexOf(77));
console.log(marks.indexOf(10));

console.log('-----------');

console.log(marks.join());
console.log(marks.join(''));

console.log ('----------');

//const x = 102846;
const x = parseInt(marks.join(''));
console.log (x);

console.log ('-------------');

console.log (marks);

marks.reverse();
console.log(marks);

const alus = 'alus';
const sula = alus.split('').reverse().join('');
console.log(sula);


console.log ('------');

const numbers = [10,20,30,40,50];

console.log(numbers.slice(numbers.length-3));

