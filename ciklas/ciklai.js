const studentNames = ['Jonas', 'Maryte', 'Petras', 'Ona'];

for (let i=0;i<studentNames.length;i++){
    const studentName = studentNames[i];
    console.log(studentName);
}
console.log('------------')
function arTestiCikla(iteracijosNr,sarasoIlgis){
   
    return iteracijosNr<sarasoIlgis}


    let j = 0;
for (; arTestiCikla(j,studentNames.length) ;){
    const studentName = studentNames[j];
    console.log(studentName);
    j++;}


    ///budas sustabdyti cikla 
    /// if (j>=studentNames.length){ break;}

const colourList =['red','green','blue','black','white','yellow'];

for (let i=0; i<colourList.length; i++){
    const colour = colourList[i];
    console.log(colour);
}

///FOR OF 
console.log ('-------for of-----------');
const colourList1 =['red','green','blue','black','white','yellow'];

let i2 = 0
for (const colour of colourList1){
    

    console.log(i2++, colour);
}
    

//WHILE 
console.log ('-------While-----------');

let i3=0
while(i3<colourList.length){
    const colour = colourList[i3];
    console.log(colour);
    i3++;
}

////do-while
console.log ('-------do-While-----------');
let i4=0;
do {
    const colour = colourList[i4];
    i4++;
    console.log(i4,colour);
} while (i4<colourList.length);



///for each. a=masyvo reiksme, i - index, x original array.
console.log ('-------for each----------');

const colourList2 =['red','green','blue','black','white','yellow'];

colourList2.forEach((a,i,x)=>{ x[i]=a+',';
    console.log (x);
});





///for in 
const car = {
    brand: 'Audi',
    model: '80',
    color: 'red',
    price: [300,200]
}
const carObjKeys = Object.keys(car);
console.log(carObjKeys);

for (const key of carObjKeys){
    console.log ('--->',car[key]);
}

for (const key in car){
    console.log('---',car[key]);
}
// if (car.model.map(a => a===0)){
//     console.log('car brand',car.brand);
// }