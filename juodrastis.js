

const students = [
    {
        name:'Jonas',
        marks: [2,5,5,3],
    },{
        name: 'Maryte',
        marks: [9,8,7],
    },{
        name: 'Petras',
        marks: [10,10],
    },{
        name: 'Ona',
        marks: [7,7,7,7,7],
    },
    ];
///Koks vardas studento, kuris turi pazymi (2)?



// function pazymys (students){
// const na = ''
   

const pazymys = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(0);


    for (let i=0; i<students.length;i++){
        const pazymiuArray = students[i].marks;
    if (pazymiuArray.includes(8)){
        const na = students[i].name
        console.log(na);  
    }}
   
    for (let i=0; i<students.length;i++){
    if (students[i].marks.includes(pazymys)){
        const na = students[i].name
        console.log(na);  
    }}
    



// console.log (pazymys(students));

function maziausioPazymioSavininkas (students){

const pazymys = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(0);

let vardas = '';
let i=0
for (; i<students.length;){
    if (students[i].marks.includes(pazymys)){
        vardas += students[i].name + ' ';
    } i++}
    return vardas;
}
console.log('Maziausio pazymio savininkas',maziausioPazymioSavininkas(students));


   
function maziausioPazymioSavininkas1 (students){

    // const pazymys = students.map(student=>student.marks).
    // reduce((newArray, oldArray) => newArray.concat(oldArray)).
    // sort((a,b)=>a-b).at(-1);
    
    let vardas = '';
    let i=0
    for (; i<students.length;){
        if (students[i].marks.includes(7)){
            vardas += students[i].name + ' ';
        } i++}
        return vardas;
    }
    console.log('didz pazymio savininkas',maziausioPazymioSavininkas(students));


    const classAverage = students
        .map(student=>student.marks)
        .map(marks=>marks.reduce((t,mark) => t+mark,0)/marks.length)
        .reduce((t,average) => t + average,0)/students.length;
console.log('Klases vidurkis -',classAverage);
    

const vid = students
.map(student=>student.marks)
.map(marks=>marks.reduce((t,mark)=>t+mark,0)/marks.length).sort((a,b)=>a-b);
console.log(vid);

// let daugPazymiu = 0;
// let vardas = '';
// let i = 0;

// function vardas1 (students){

// for (let i=0; i<students.length;i++){
//     if (students[i].marks.length>daugPazymiu){
//         console.log(vardas);
//         vardas = students[i].name; 
//     }
   
//     } return daugPazymiu;
// }
//     console.log (vardas1(students));
function daugiausiaIvertinimu (a){

    const vardasDaugPazymiu = students.map(students=>students.marks.length).
    sort((a,b)=>a-b).at(-1);

    let vardas = '';
    let i=0
    for (; i<students.length;i++){
        if (students[i].marks.length===vardasDaugPazymiu){
            vardas = students[i].name;
        } }
        return vardas;
    }

    console.log(daugiausiaIvertinimu(students));




const stud = students.forEach((a,b,c)=> c[0]