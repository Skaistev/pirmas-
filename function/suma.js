const s1 = 7+5;
const s2 = 77+55
const s3 = 777+555

function add(pirmaskaicius, antrasSkaicius){

    console.log("pirmas", pirmaskaicius);
    console.log('antras', antrasSkaicius);
    //gauti du skaicius
    //juos susumuoti
    const suma = pirmaskaicius + antrasSkaicius;
    console.log ("sumyte",suma);
    //grazinti sumos rezultata

return suma 
}

const s4 = add(7,5);
console.log(s4)

const s5 = add (100,200)

//prekes kaina 100 eur 
// reikia funkc kuri grazina pilna kaina su pvm, 
//kuris bus naudojama ant etiketes
// pvz: 121 eur

function kainaSuPVM (a){
    console.log('PIRMAS',a)
    const PVM = 21;
    const coof = 1 + PVM / 100;
    const galutine = a * coof;
    
 
return galutine + ' EUR'; }

const kaina1 = 200;
const kainaSuPVM2 = kainaSuPVM(kaina1);
console.log(kainaSuPVM2);

function bendraSuma (seka){
let sekosSuma2 = 0;
let index = 0
sekosSuma2 += seka [index++]
console.log('1',sekosSuma2);
sekosSuma2 += seka [index++]
console.log('2',sekosSuma2);
sekosSuma2 += seka [index++]
console.log('3',sekosSuma2);
sekosSuma2 += seka [index++]
console.log(sekosSuma2);
sekosSuma2 += seka [index++]
console.log(sekosSuma2)



return 'alio '+ seka [1];
}

const seka = [2,4,6,8,20];
const sekosSuma = bendraSuma (seka);
console.log(sekosSuma);
const ilgis = seka.length;
console.log(ilgis);

let sekosSuma2 = 0;
let index = 0
sekosSuma2 += seka [index++]
sekosSuma2 += seka [index++]
sekosSuma2 += seka [index++]
sekosSuma2 += seka [index++]
sekosSuma2 += seka [index++]
console.log(sekosSuma2)
