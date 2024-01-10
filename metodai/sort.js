///sort mutuoja esamas reiksmes!!! skirtingai nei map ar filter sukuria naujas reiksmes.

const marks = [10,10000,19,33,21,'labas',8,4,6];


marks.sort((a,b)=>a-b);

console.log (marks);

const students = [
    {name: 'Jonas',
    age: 99,
},{
    name:'Maryte',
    age: 88,
},{
    name: 'Petras',
    age: 33,
}]

students.sort((a,b)=> a.age-b.age);
console.log(students);

const lists = [
    [5],
    ['a','s'],
    [true],
    [],
    [[],5,'s',false],
    [[],5,'s',false,undefined],
];

console.log(lists);

lists.sort((a,b) => a.length-b.length);
