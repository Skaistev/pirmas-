const students = [
{
    name:'Jonas',
    marks: [2],
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

// Koks klases pazymiu vidurkis?

const classAverage = students
        .map(student=>student.marks)
        .map(marks=>marks.reduce((t,mark) => t+mark,0)/marks.length)
        .reduce((t,average) => t + average,0)/students.length;
console.log('Klases vidurkis -',classAverage);

//kokia yra klases pazymiu mediana?




function mediana (){

const marksArray = students.map(student=>student.marks);

function bendrasArray (marksArray){

    let bendras = [];

for (let i=0;i<marksArray.length;i++){
    bendras = bendras.concat(marksArray[i]);
}

    return bendras;
}

const bendras1 = bendrasArray (marksArray).
sort((a,b)=>a-b).at((bendrasArray.length/2).toFixed());

return  bendras1;
}

console.log( 'Mediana -', mediana(students));




const klasesMediana = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(students.map(s=>s.marks).length/2);


  console.log('Mediana -',klasesMediana)


//Kas yra maziausias pazymis?

const maziausiasPazymys = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(0);

console.log('Maziausias pazymys -', maziausiasPazymys);

//Koks yra didziausias pazymys?

const didziausiasPazymys = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(-1);
console.log('Didziausias pazymys -', didziausiasPazymys);

//Koks yra skirtumas tarp didziausio ir maziausio pazymiu?

const skirtTarpDidzIrMaziausio = ((students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(-1)))-((students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(0)));



console.log('Skirtumas tarp didziausio ir maziausio pazymio -', skirtTarpDidzIrMaziausio);

///Koks vardas studento, kuris turi maziausia pazymi?

//apskaiciuto maziausia pazymi

function studVardas (students){

const pazymys = students.map(student=>student.marks).
reduce((newArray, oldArray) => newArray.concat(oldArray)).
sort((a,b)=>a-b).at(0);

console.log(pazymys);

let studVardas = '';
for (let i=0; i<students.length;i++){
    if (students[i].marks.map(a=> a===10)){
        console.log(students[i].marks)
        studVardas = students[i].name;
        console.log (studVardas);
        return students[i].name;
       
    }
}


return 'studVardas'
}
console.log(studVardas(students));


///Koks vardas studento, kursi turi geriausia pazymi?


///Koks vardas studento, kuris turi geriausia pazymiu vidurki?


///Koks yra vardas studento, kuris turi prasciausia pazymiuy vidurki?
///Koks yra vardas studento, kuris turi mažiausiai pažymių?
///Koks yra vardas studento, kuris turi daugiausiai pažymių?
///Grazinti studentu vardu masyva, kuris yra isrinkiuotas pagal ju vidurki (didejimo tvarka).
///Grazinti studentu vardu masyva, kuris yra isrinkiuotas pagal ju vidurki (mazejimo tvarka).


