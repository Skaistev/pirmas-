console.log (typeof 3.14);
console.log (typeof -999);
console.log (typeof 0);
console.log (typeof NaN);
//console.log (typeof infinity);
//console.log (typeof -infinity);
console.log (typeof []);
console.log (typeof 'a');


function sum(a,b){

    if(typeof a !== 'number' ){
        return 'Error: pirmas parametras nėra skaičius';
    } 
    if(typeof b !== 'number'){
        return 'Error: antras parametras nėra skaičius';}

    return a+b;
}

console.log(sum (7,5),12);
console.log (sum ('labas',2));
console.log (sum (2,[]));

