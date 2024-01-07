//Funkcijos 
//4.
function didziausiasSkaiciusSarase (skaiciai){

    if(typeof (skaiciai) !== 'object'){
        return "Pateikta netinkamo tipo reikšmė.";
    }if (skaiciai.length===0){
        return "Pateiktas sąrašas negali būti tuščias."
    // }if (skaiciai[0]= 1){
    //     let didziausiasSkaicius1 = skaiciai[1];
    //     for(let i=2; i<=skaiciai.length; i++){
    //         if(skaiciai[i] > didziausiasSkaicius1){
              
    //           didziausiasSkaicius1 = skaiciai[i];
    //             return didziausiasSkaicius1;}
    // }
        let didziausiasSkaicius = skaiciai[0];
    for(let i=1; i<=skaiciai.length; i++){
      if(skaiciai[i] > didziausiasSkaicius){
        
        didziausiasSkaicius = skaiciai[i];
      
    }
        return didziausiasSkaicius;
    



}}}

console.log(didziausiasSkaiciusSarase([1,-6,-2,-2]));
console.log(didziausiasSkaiciusSarase([1,2,3]));
console.log(didziausiasSkaiciusSarase([-5,78,14,0,18]));
console.log(didziausiasSkaiciusSarase([69,69,69,69,66]));
console.log(didziausiasSkaiciusSarase([-1,-2,-3,-4,-5,-6,-7,-8]));
console.log(didziausiasSkaiciusSarase('POMIDORAS'));
console.log(didziausiasSkaiciusSarase([]));


// bandymas. 
const skaiciukai = [-1,-2,-3];
let didziausiasSkaicius = skaiciukai[0];

for(let i=1; i<=skaiciukai.length; i++){
    if(skaiciukai[i] > didziausiasSkaicius){
      
        didziausiasSkaicius = skaiciukai[i];
        console.log('--->',skaiciukai[i]);}}
        
        console.log (didziausiasSkaicius);

//  galimas variantas ' let didziausiasSkaicius= Math.max(...skaiciai);', tuomet nereik dvieju paskutiniu if salygu!