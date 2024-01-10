const marks = [10,2,8,4,6,100,-7,3.14,-2.1];


function isMarkCorrect(mark){
    return true;
}

const correctMark = marks.filter(isMarkCorrect);


console.log (correctMark);

const students = ['Petras','Maryte','Jonas', 'Ona'];
const pirmaKomanda = students.filter((item,index,x)=>index%2===0);
const antraKomanda = students.filter((item,index,x)=>index%2===1);
console.log (pirmaKomanda);
console.log (antraKomanda);



const marks1 =[10,2,8,4,6];
const doubleMarks =  marks1.map(marks1=>marks1*2);
console.log (marks1);
console.log(doubleMarks);

const indexList = [2,2,2,2,2,2,2,2,2,2,2,2];
///item - pirmas parametras elemetas is saraso, index - saraso indeksas;
const expo = indexList.map((item,index) => index**item);
const expo1 = indexList.filter((item,index)=>index===11)

console.log (expo);

console.log (expo1);
