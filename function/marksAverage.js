const marks1 = [1,2,3,4,5];
const marks2 = [2,4,6,8,10];
const marks3 = [10,2,8,4,5,10,1,7,4,6];
const marks4 = [7,7,7,7,7,7,7];
const marks5 = [10];
const marks6 = [1,10];
const marks7 = [-10,10];
const marks8 = [];
const marks9 = [-10,10];
const marks10 = [10,2,0,-6,8,-3.14,4,2.727,6,11,200,1000,10.99999,10.00001];
const marks11 = [10,5,5,6,7,9,-10,-3.14,5.22222];
const marks12 = [-2,-1,-3];
const marks13 = [1.2,1.3,1.4];
const marks14 = [10,-10,0,0.9999,10.00001,3.14,'labas',true, false,[],NaN, Infinity, -Infinity, undefined, marksAverage];

function marksAverage (marks){
    if (marks.length === 0) {return 'truksta duomenu'}

  let count = 0
    let sum = 0;

   for (let i =0;i<marks.length;i++){

    const mark = marks[i];
    if (mark>0 && mark<=10){
        sum += mark;
    count++;
    }
   
    }
    
    return sum/marks.length;
}

const average1 = marksAverage (marks1);
console.log (average1, '--->',3);
const average2 = marksAverage (marks2);
console.log (average2, '--->',6);
//const average3 = marksAverage (marks3);
//console.log (average3, '--->',6;
//const average4 = marksAverage (marks4);
//console.log (average4, '--->',7);
//const average5 = marksAverage (marks5);
//console.log (average5, '--->',10);
const average7 = marksAverage (marks7);
console.log (average7, '--->','truksta');



console.log ('bandymas');

function marksAverage2 (marks){
    const i = 0
    const mark = marks[i];
    if (marks.length === 0 || mark <0){
        
       return 'truksta duomenu'}

       

    let count = 0;
    let sum = 0;

    for(let i=0; i<marks.length; i++){
        const mark = marks[i];
        
    //mark > 0 && mark <11 && Number.isInteger(mark))

        if(mark > 0 && mark <11 && Number.isInteger(mark)&& typeof sum === 'number')
        {
           
            sum += mark 
            count++}
            
        
        
        }
        
        
        
    



    
    return 'vidurkis', sum/count;

}






//const average10 = marksAverage2 (marks1);
//console.log (average10, '-->', 3);

//const average11 = marksAverage2(marks5);
//console.log (average11, '10,10');

//const average12 = marksAverage2(marks8);
//console.log (average12, 'nera duomenu');

//const average13 = marksAverage2(marks9);
//console.log (average13, 'minusiniai duomenu');

//const average14 = marksAverage2 (marks10);
//console.log (average14);
const average15 = marksAverage2 (marks11);
console.log ('vidurkis',average15);
const average16 = marksAverage2 (marks12);
console.log ('visi neigiami',average16);
const average17 = marksAverage2 (marks13);
console.log ('visi ne  sveiki',average17);
const average18 = marksAverage2 (marks14);
console.log ('nesamone', average18);