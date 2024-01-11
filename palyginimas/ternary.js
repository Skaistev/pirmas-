let arSilta = null;
const dabartineTemperatura = -1;
const siltaNuo = 20;

if(dabartineTemperatura >=siltaNuo){
    arSilta = true;
}else{
    arSilta = false;
}

console.log('Ar silta:',arSilta);

let tekstas = '';

const language = 'lt';
if (language === 'lt'){
    tekstas = 'labas';
}else {
    tekstas = "Hello";
}
console.log ('tekstas:', tekstas);

const geraNuotaika = 3;
const dabartioneNuotaika = 4;


const kokiaNuotaika =  dabartioneNuotaika>= geraNuotaika? 'gera':'bloga';
console.log ('kokia nuotaika:' , kokiaNuotaika);


const dabar = 4;
const riba = 5;

const skaicius = dabar > riba? ' daugiau': "nera daugiau";
console.log (skaicius);

let x= null;

if (5>3 && 7>9){

    x="abu teisingi";
}else{
    x='kazkas negerai';
}
console.log (x);

const x2= 5>3 && 7>9? "abu teisingi": 'kazkas negerai';
console.log(x2);

function pilnametis(amzius){

const riba = 18;
const taip = 'as esu pilnametis';
const ne = "as esu nepilnametis";

// if (amzius>=riba){
//     return "as esu pilnametis";

// }else {
//     return 'as esu nepilnametis';
// } 

// }
// return amzius >= riba? taip:ne;
// }

const text = amzius >= riba ? '':'ne';
return `As esu ${text} pilnametis` ; 

}

console.log (pilnametis(20));
console.log (pilnametis(2));

function iLoveIt(doILoveIt){
    // if(doILoveIt){
    //     return 'I do';
    // }else {
    //     return 'I don\'t';
    // }
   
return `I do${doILoveIt? '':'n\'t'} love it'`;

}


    
console.log (iLoveIt(true));
console.log (iLoveIt(false));

function pasisveikinimas (time){
    return time > 12? 'Labas vakaras':' Labas rytas';
}
console.log(pasisveikinimas(10));

function pasisveikinimas1 (time){


    return `Labas ${time>12? 'vakaras': 'rytas'}!`
}

console.log(pasisveikinimas(10));
console.log(pasisveikinimas1(9));