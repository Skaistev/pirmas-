const marks = [10,10,2];
let sum = 0;

for (let i=0;i<marks.length;i++) {
    sum+=marks[i];
}
console.log(sum);

///pirmas elelemtas(sum) - kaupiklis, antras elemetas (mark) - masyvo narys. 

const totalSum = marks.reduce((sum,mark)=>(sum+mark)/marks.length);
console.log(totalSum);

const names = ['Jonas', 'Antanas', 'Aloyzas','Martynas'];
let allNames = '';

for (let i=0;i<names.length;i++) {
    allNames+=names[i][0];
}
console.log(allNames);

const reducesNames = names.reduce ((a,b)=> a+b[0] +'.','');
console.log(reducesNames);



console.log([1,2,3,4].reduce((t,n)=>t+n));
//console.log([1,2,3,4].reduce((t,n)=>t+n,10)) logikos bloke paskutinis davinys reiskia nuo kur pradet kaupti. 
console.log('--->',[1,2,3,4].reduce((t,n)=>t+n,10));

console.log([1,2,3,4].reduce((t,n)=>t-n));
console.log([1,2,3,4].reduce((t,n)=>t-n,0));


