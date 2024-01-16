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

function maziausioPazymioSavininkas (students){

    const pazymys = students.map(student=>student.marks).
    reduce((newArray, oldArray) => newArray.concat(oldArray)).
    sort((a,b)=>a-b).at(0);
    
    let vardas = '';
    
    for (let i=0; i<students.length;i++){
        if (students[i].marks.includes(pazymys)){
            vardas += students[i].name + ' ';
        }}
        return vardas;
    }
    console.log('Maziausio pazymio savininkas - ', maziausioPazymioSavininkas(students));



///Koks vardas studento, kursi turi geriausia pazymi?

function didziausioPazymioSavininkas (students){

    const pazymys = students.map(student=>student.marks).
    reduce((newArray, oldArray) => newArray.concat(oldArray)).
    sort((a,b)=>a-b).at(-1);

    let vardas = '';
    
    for (let i=0; i<students.length;i++){
        if (students[i].marks.includes(pazymys)){
            vardas += students[i].name + ' ';
        }}
        return vardas;
    }
    console.log('Didziausio pazymio savininkas - ', didziausioPazymioSavininkas(students));


///Koks vardas studento, kuris turi geriausia pazymiu vidurki?

function geriausioVidurkioSavininkas (students){

    const vid = students
    .map(student=>student.marks)
    .map(marks=>marks.reduce((t,mark)=>t+mark,0)/marks.length).sort((a,b)=>a-b).at(-1);

    let vardas = '';
    
    for (let i=0; i<students.length;i++){
        if (students[i].marks.includes(vid)){
            vardas += students[i].name + ' ';
        }}
        return vardas; 
    }
    console.log('Geriausio vidurkio savininkas - ', geriausioVidurkioSavininkas(students));

///Koks yra vardas studento, kuris turi prasciausia pazymiuy vidurki?
function prasciausioVidurkioSavininkas (students){

    const vid = students
    .map(student=>student.marks)
    .map(marks=>marks.reduce((t,mark)=>t+mark,0)/marks.length).sort((a,b)=>a-b).at(0);
/// jei vidurkis per kableli? 

    let vardas = '';
    
    
    for (let i=0; i<students.length;i++){
        if (students[i].marks.includes(vid)){
            vardas += students[i].name + ' ';
        }}
        return vardas; 
    }
    
    console.log('Prasciausio vidurkio savininkas - ', prasciausioVidurkioSavininkas(students));




///Koks yra vardas studento, kuris turi mažiausiai pažymių?

function maziausiaiIvertinimu (students){

    const vardasMazPazymiu = students.map(students=>students.marks.length).
    sort((a,b)=>a-b).at(0);

    let vardas = '';
    let i=0
    for (; i<students.length;i++){
        if (students[i].marks.length===vardasMazPazymiu){
            vardas = students[i].name;
        } }
        return vardas;
    }

    console.log('Maziausiai pazymiu turi -', maziausiaiIvertinimu(students));


///Koks yra vardas studento, kuris turi daugiausiai pažymių?

function daugiausiaIvertinimu (students){

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

    console.log('Daugiausiai pazymiu turi -',daugiausiaIvertinimu(students));


///Grazinti studentu vardu masyva, kuris yra isrinkiuotas pagal ju vidurki (didejimo tvarka).

function sort(students) {
    return students.map((el) => { return {
          name: el.name,
          marks: el.marks.reduce((acc, cur) => acc + cur) / el.marks.length,
        };}).sort((a, b) => b.marks - a.marks).map((el) => el.name);
  }


  console.log(stud1(students))

  function getStudents(arr) {
      return arr.map((arr) => {return {
            name: arr.name,
            average: arr.marks.reduce((suma, narys) => suma + narys) / arr.marks.length,
          };
        })
        .sort((a, b) => b.average - a.average)
        .map((arr) => arr.name);
    }
    console.log (getStudents(students));

///Grazinti studentu vardu masyva, kuris yra isrinkiuotas pagal ju vidurki (mazejimo tvarka).


