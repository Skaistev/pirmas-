// Hof - hiigher order function;
// 'tevine' funcija, kuri gauna kita funkcija kaip argumenta;
///??????


function doubleTrouble(n) {

    if (n*2>10){
        return 10
    }

    return n*2;
}

const marks = [10,2,8,4,6];
console.log(marks)

// [20,4,16,8,12] * 2
//[11,3,9,5,7] +1 

function doubleTrouble(n) {

    if (n*2>10){
        return 10
    }

    return n*2;
}

console.log ('-----');

const doubleMarks = [];

for (let i=0; i < marks.length; i++) {



    ///doubleMarks.push(marks[i]*2);




   doubleMarks.push(doubleTrouble (marks[i]));


} 
console.log('--->',doubleMarks);

console.log ('----');

const doubleMarksMap = marks.map (doubleTrouble); ///negalima naudot skliaustu po funkcijos pavadinimo!

const tripleMarks = marks.map (n=>n*3);

console.log('triplemarks',tripleMarks);

//

const bool = [true, false, true, false];
const allTrue = bool.map(x => true);
console.log (allTrue);

const students = ['Jonas', 'maryte','petras', 'Ona'];
const inicialai = students.map(s => s[0]+'.');
console.log (inicialai);

const matrix = [
    [1,2],
    [3],
    [4,5,6],
    [7,8,9,10,11],
    [0],
]
const matrixCount = matrix.map(m=> m.length);
const matrixFirstValue = matrix.map(m=> m[0]);
console.log(matrixFirstValue);
console.log (matrixCount);

console.log ('mandarinai');

const mandarinai = [
    [],
    [true, false],
    [true],
    [true, true,true],
    [false,false,false,false,false],
    [true,true,true, false],
];



function prinokusiuMandarinuKiekis (krepselis){
    let geruKiekis = 0;

    for (let i = 0; i<krepselis.length; i++){

        const mandarinas = krepselis[i];
        
        
        if(mandarinas===true){
            geruKiekis++
        }
    }

    return geruKiekis;
}
const prinokusiuKiekis = mandarinai.map(prinokusiuMandarinuKiekis)
console.log(prinokusiuKiekis);

console.log('svoriai');


function filterAllowedPeople (weights){
    const weightLimit = 80; 
    const weightLimit1 = 30;

    if (weights>weightLimit||weights<weightLimit1){


    return false;}

    return true 

}
    const weights = [100, 10,50,70,66,99,150,20];

    const weightLimit = 80; 

    const allowedWeights = [];

    for (let i=0; i<weights.length; i++){

        if(filterAllowedPeople(weights[i])){

        allowedWeights.push(weights[i]);
        }
    }
    console.log (allowedWeights);

console.log ('filter');

    const allowedWeightsFilter = weights.filter(filterAllowedPeople);
    console.log(allowedWeightsFilter);

    const allowedWeights1 = weights.filter (w =>w>80);
    console.log (allowedWeights1);

    const allowedWeights2 = weights.filter(w=>w <= 80 && w >=30);
    console.log (allowedWeights2);


    const mandarinai2 = [
        [],
        [true, false],
        [true],
        [true, true,true],
        [false,false,false,false,false],
        [true,true,true, false],
    ];
    
    const mandarinaiFilter = mandarinai2.map(krep => krep.filter(mand=>mand === true).length);

    console.log (mandarinaiFilter);