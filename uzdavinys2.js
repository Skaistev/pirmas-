//Funkcijos 

//4.
function didziausiasSkaiciusSarase (skaiciai){
    if(!Array.isArray(skaiciai)){
        return "Pateikta netinkamo tipo reikšmė.";
    }
    if(skaiciai.length===0){
        return "Sarasas tuscias";
    }

    let didziausiasSkaicius = -Infinity;

    for(let i=0; i<skaiciai.length; i++){
        if (typeof skaiciai[i] !== 'number'|| !isFinite(skaiciai[i])){
            continue;
        }
        if(skaiciai[i] > didziausiasSkaicius){
        
        didziausiasSkaicius = skaiciai[i];
    }
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


