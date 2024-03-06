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


console.log('----');


const names = [];

console.log (names);
//iterpia i masyva paeiliui i gala , const grazina masyvo ilgi
const b1 = names.push ('Jonas');
console.log (b1,names);

const b2 = names.push ('Maryte');
console.log (b2,names);

const b3 = names.push ('Maryte', "Jonas");
console.log (b3,names);


//ismeta paskutine reiksme
const b4 = names.pop();
console.log('POP',b4,names);


//i masyvo prieki iterpia
const n7 = names.unshift ('Juozas');
console.log ('unshift',n7,names);
const n8 = names.unshift ('Barbora');
console.log (n8,names);

//istraukia is pirmos pozicijos 
const n9 = names.shift ('Juozas');
console.log (n9,names);
const n10 = names.shift ('Barbora');
console.log (n10,names);

console.log('-----------');

names.push('Petras','Ona')
console.log(names)



console.log('-----------');

const colours = ['red','blue','yellow', 'white','black'];
console.log (colours);

///ismeta is saraso, pirmas parametras nuo kur, antras kiek.

colours.splice(3,1);
console.log(colours);


colours.splice(3,1, "bespalvis", "orange", 'kitas')
console.log (colours);

skaic10 = [1,2,3,4,5,6];

console.log (parseInt(skaic10.join('')));
fff= 'true';
console.log(fff.split(''))

const fff = ["123456"];
console.log(fff[0])