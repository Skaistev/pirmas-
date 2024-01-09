//Funkcijos 

//4.
function didziausiasSkaiciusSarase (skaiciai){
    //duomenu validacija
    if(!Array.isArray(skaiciai)){
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if(skaiciai.length===0){
        return "Sarasas tuscias";
    }
//logika
    let didziausiasSkaicius = -Infinity;

    for(let i=0; i<skaiciai.length; i++){
        if (typeof skaiciai[i] !== 'number'|| !isFinite(skaiciai[i])){
            continue;
        }
        if(skaiciai[i] > didziausiasSkaicius){
        
        didziausiasSkaicius = skaiciai[i];
    }
    ///atsakymo validacija 
    if (didziausiasSkaicius === -Infinity){
        return "error"
    }
}
return didziausiasSkaicius;
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1,2,3]));
console.log(didziausiasSkaiciusSarase([-5,78,14,0,18]));
console.log(didziausiasSkaiciusSarase([69,69,69,69,66]));
console.log(didziausiasSkaiciusSarase([-1,-2,-3,-4,-5,-6,-7,-8]));
console.log(didziausiasSkaiciusSarase('POMIDORAS'));
console.log(didziausiasSkaiciusSarase(['labas',1,2,3,4]));
console.log(didziausiasSkaiciusSarase([0,2,3,4,'labas']));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase([0,0,0,NaN]));
console.log(didziausiasSkaiciusSarase([NaN,0,0,0]));


// bandymas. 
// const skaiciukai = ['labas',[],69,69,69,65,'labas'];
// let didziausiasSkaicius2 = -Infinity;

// for(let i=0; i<=skaiciukai.length; i++){
//     if(skaiciukai[i] > didziausiasSkaicius2){
      
//         didziausiasSkaicius2 = skaiciukai[i];
//         console.log('--->',skaiciukai[i]);}}
        
//         console.log (didziausiasSkaicius2);

console.log('----Isrinkti raides----');

function isrinktiRaides (text,number){
    if (typeof(text)!=="string"){
        return 'Pirmasis kintamasis netinkamo tipo.';}
    text1= text.split('');
  
    if (text1.length<0 || text1.length>100){
        return 'Pirmojo kintamojo reiksme yra netinkamo dydzio.'
    }if (typeof(number) !== 'number'){
        return 'Antrasis kintamasis netinkamo tipo.';
    }if (number <=0){
        return "Antrasis kintamasis turi buti didesnis uz nuli.";
    }if (number > text1.length){
        return 'Antrasis kintamasis turi būti ne didenis už pateikto teksto ilgį';
    }

    return 'raides';
}



console.log ('bdf -->', isrinktiRaides('abcdefg', 2));
console.log ('cfil -->',isrinktiRaides('abcdefghijkl',3));
console.log ('antrasis kintamasis turi būti didenis už nulį --->',isrinktiRaides('abc',0));
console.log ('antrasis kintamasis turi būti ne didenis už pateikto teksto ilgį --->',isrinktiRaides('abc',4));
console.log ('pirmasis kintamasis yra netinkamo tipo --->', isrinktiRaides(1561,2));

const text = 'abcdef';

let  text2 =[];

for (i=1;i<text.split('').length;i+=2){
       
       text2 += text[i];
       
    }console.log(text2);