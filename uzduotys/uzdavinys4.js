
// 1.     Duomenų Objektas: Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, 
// autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą.

const dataKnygos = {
    autorius: "Egziuperi",
    pavadinimas: "Mazasis princas",
    leidimas: "2000 m."
}

for (const savybe in dataKnygos){
    console.log(dataKnygos[savybe]);
}

// 2.     Vartotojų Masyvas: Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė 
// turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių.

const vartotojai = [
    { 
      vardas: "Ana",
      amzius: 15
    },
    {
      vardas: "Ema",
      amzius: 18
    }
]


for ( const vartotojas of vartotojai){
    console.log(vartotojas.vardas, vartotojas.amzius);

}

// // 3.     Sąrašo Filtravimas: Turite objektų masyvą, kuriame saugoma informacija 
// apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją, 
// kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai.

const produktai = [
    {
     kategorija: "pienas",
     pavadinimas: "varske",
     kainas: "4 eur"
    },
    {
        kategorija: "pienas",
        pavadinimas: "kefyras",
        kainas: "2 eur"
    },
    {
        kategorija: "pienas",
        pavadinimas: "sviestas",
        kainas: "6 eur"
    },
    {
        kategorija: "duona",
        pavadinimas: "sumustiniu duona",
        kainas: "1 eur"
       },
       {
           kategorija: "duona",
           pavadinimas: "rugine duona",
           kainas: "4 eur"
       },
       {
           kategorija: "duona",
           pavadinimas: "vaisiu duona",
           kainas: "8 eur"
       },
       {
        kategorija: "gerimai",
        pavadinimas: "gira",
        kainas: "1 eur"
       },
       {
           kategorija: "gerimai",
           pavadinimas: "limonadas",
           kainas: "2.2 eur"
       },
       {
           kategorija: "gerimai",
           pavadinimas: "vanduo",
           kainas: "0.5 eur"
       },
       
]

function products (kat){
    let aprasymas = '';
for( const product of produktai){
    if(product.kategorija===kat){
       aprasymas += ` Produktas: ${product.pavadinimas} Kaina: ${product.kainas}\n`;
    }
}
return aprasymas

}

console.log(products("pienas"));



// 4.     Objekto Kopijavimas: Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją.

const vartotojai5 = [
    {
        vardas: "Ima",
        amzius: 29
    },
    { 
      vardas: "Ana",
      amzius: 16
    },
    {
      vardas: "Ema",
      amzius: 18
    },
    {
        vardas: "Ina",
        amzius: 25
    }
]




const newObj = [...vartotojai5]

console.log('--->', newObj);



// 5.     Raktų ir Reikšmių Atrinkimas: Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, 
// sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.
const vart = 
    { 
      vardas: "Ana",
      amzius: 15,
      ugis: 170,
      pielietybe: "lietuvis",
      gyvena: "Klaipeda"

    }


let raktai = [];
let savybes = [];

for ( const key in vart){
    raktai.push(key)
    savybes.push(vart[key])
}


console.log(raktai);
console.log(savybes);

// 6.     Masyvo Suma: Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.

const skaiciai = [12,8,10,5,5,3,7];

const suma = skaiciai.reduce((t,el)=> t+el);
console.log(suma);

let suma1 = 0;

for (let i=0;i<skaiciai.length;i++){
suma1+= skaiciai[i]
}

console.log(suma1);

// 7.     Didžiausias Skaičius: Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.

const skaiciai2 = [8,10,5,15,3,19,7];

let did = 0;

for(let i=0;i<skaiciai2.length;i++){
 if(skaiciai2[i]>did){
    did = skaiciai2[i];
 }
}

console.log(did);


// 8.     Objekto Savybių Skaičius: Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.

const vart1 = 
    { 
      vardas: "Ana",
      amzius: 15,
      ugis: 170,
      pielietybe: "lietuvis",
      gyvena: "Klaipeda"

    }

    function savSkai (x){

        let savybiuSkaicius = [];

         for ( const savybe in x){
          savybiuSkaicius.push(savybe);
       
         }
    return savybiuSkaicius.length
  }

  console.log(savSkai(vart1));


// 9.     Sąlyginis Objektų Atrinkimas: Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. 
// Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18.


const vartotojai3 = [
    {
        vardas: "Ima",
        amzius: 29
    },
    { 
      vardas: "Ana",
      amzius: 16
    },
    {
      vardas: "Ema",
      amzius: 18
    },
    {
        vardas: "Ina",
        amzius: 25
    }
]

let vardas = '';
for (const vart of vartotojai3){
   if(vart.amzius>18) {vardas+=vart.vardas + ' ' + vart.amzius+ ' '}
    else {continue}
}
console.log(vardas);


// 10.  Objekto Savybių Keitimas: Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą,
//  padidinkite kiekvieno asmens amžių 1 metais.


const vartotojai4 = [
    {
        vardas: "Ima",
        amzius: 29
    },
    { 
      vardas: "Ana",
      amzius: 16
    },
    {
      vardas: "Ema",
      amzius: 18
    },
    {
        vardas: "Ina",
        amzius: 25
    }
]
for (const x in vartotojai4){

vartotojai4[x].amzius ++
}
console.log(vartotojai4);

