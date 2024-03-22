
// //Masyvo Elementų Filtravimas: Sukurkite funkciją, kuri naudojant for ciklą iš masyvo išrenka 
// ir grąžina naują masyvą su elementais, kurie tenkina tam tikrą sąlygą.

const a = [2,10,8,6,5, "a"]
const b = "number"

const salyga = a => a.filter(a=>typeof a === b)

console.log(salyga(a));

function salyga1 (a,b){
    
    let arr =[];
   for (const x of a) {
   
   if( typeof x === b) {  arr.push(x) } 
   }
   return arr

}

console.log(salyga1(a,"string"));



// 2.     Unikalių Reikšmių Radimas: Turite masyvą su pasikartojančiomis reikšmėmis. 
// Naudodami for ciklą, sukurkite naują masyvą, kuriame būtų tik unikalios reikšmės.

const c = [2,10,3,6,11,12,11,3,10, "a","b", "b" , true, true]

function unique (arr){

let arr1 = [];

for(let i=0;i<arr.length;i++){
    if(arr1.indexOf(arr[i])=== -1){
        arr1.push(arr[i])
    }
}
return arr1

//     const sorted = arr.sort((a,b)=>a-b)
//     let arr1 = [];

// for(let i=0;i<sorted.length;i++){
    
//     if(sorted[i]!==sorted[i+1]){
//       arr1.push(sorted[i])
//     }
// }

// return arr1



}

console.log(unique(c));



// 3.     Objekto Gylis: Parašykite funkciją, kuri naudodama for in ciklą ir 
// rekursiją, grąžintų objekto gylį (kiek giliausiai objektas turi įdėtinius objektus).




// 4.     Masyvo Atvirkštinis: Turite skaičių masyvą. Naudodami for ciklą, 
// sukurkite naują masyvą, kurio elementai būtų pradinio masyvo, bet eilės atvirkščiai.

const arr2 =  ["a", 1,6,10,11,"b"]
const atvArr = arr2.reverse();
console.log(atvArr);

let naujas = [];

for (let i=arr2.length-1; i>=0; i--){
  naujas.unshift(arr2[i])
}
console.log(naujas);



// 5.     Raktų Filtravimas Objekte: Turite objektą su daugybe savybių. 
// Sukurkite funkciją, kuri naudojant for in ciklą, grąžina naują objektą, kuriame yra tik tas savybės, kurios tenkina tam tikrą sąlygą.

const ob = {
    vardas: "Jonas",
    amzius: 99,
    lytis: "nenurodyta",
    seima: 'ne',
    augintinis: 'kita',
    tautybe: "nenurodyta",
}

function savybes (x,y){
  for(const a in x){
    if(x[a]!==y){
        delete x[a]
    }
}
return x
}
 console.log(savybes(ob,'ne'));

// 6.     Suminė Vertė Objekte: Turite objektą, kurio savybės yra skaičiai. 
// Naudodami for in ciklą, apskaičiuokite visų objekto savybių sumą.

const obj = {
    1: "vienas",
    2: "du",
    3: "trys",
}

function suma (obj){
    let sum = 0;
    for( const x in obj){
    const num = Number(x)
       sum += num
    }
    return sum;
}
console.log(suma(obj));

// 7.     Masyvo Elementų Kiekis: Turite masyvą su skirtingų tipų elementais. 
// Naudodami for ciklą, suskaičiuokite, kiek yra kiekvieno tipo elementų.

const arr3 =  ["a", 1,6,10,11,"b", true, false]


    let string = 0;
    let number = 0;
    let boolean = 0;

for(let i=0;i<arr3.length;i++){
    if(typeof arr3[i]==="string"){
        string++
    }
    if(typeof arr3[i]==="number"){
        number++
    }
    if(typeof arr3[i]==="boolean"){
        boolean++
    }
}
 console.log('stringas', string, 'number', number, 'boolean' , boolean);


// // 8.     Objekto Konversija Į Masyvą: Sukurkite funkciją, kuri objektą (raktai ir reikšmės) konvertuotų į masyvą,
//  kur kiekvienas elementas būtų [raktas, reikšmė] pora.
const ob3 = {
    vardas: "Jonas",
    amzius: 99,
    lytis: "nenurodyta",
    seima: 'ne',
    augintinis: 'kita',
    tautybe: "nenurodyta",
}

function convert (ob){
   return Object.entries(ob) 
}
console.log(convert(ob3));

// 9.     Dinaminis Objekto Sudarymas: Naudodami for ciklą, sukurti objektą, kurio raktai yra skaičiai nuo 1 iki n, 
// o reikšmės - tie skaičiai pakelti kvadratu.




// // 10.  Sąlyginės Reikšmės Objekte: Turite objektą, kuriame saugomos įvairios vartotojų savybės (pvz., vardas, amžius, miestas).
// ukurkite funkciją, kuri naudojant for in ciklą, pakeistų tam tikrų savybių reikšmes, 
// jeigu jos tenkina nurodytą sąlygą (pvz., jeigu vartotojo amžius yra mažesnis nei 18, pridėkite savybę pilnametis: false).
