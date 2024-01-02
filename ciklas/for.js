let number = 1;

//console.log(number++);

for(let i=0; i<5;i++){
    console.log ('labas', i)


}

for (let i=10;i<33;i++){

    console.log ('kiek desimciu:', i, (i- (i % 10))/10);

}

for (let i=0;i<10;i+=3){

    console.log ('step',i)
}

const hi = 'labukas';
console.log(hi.length);
console.log(hi[0]);

const marks = [10,2,8,4,6,2,0]
console.log (marks.length);
console.log (marks[0]);
console.log (marks[1]);

for (let i=marks.length-3;i<marks.length;i++){
    
    console.log(i,'-->',marks [i]);


}
for (let i=0;i<marks.length;i++){
    
    console.log(i,'----->',marks [i]);


}

console.log ('bandymas');

for (let i=0; i<5; i++) {console.log (i)}

console.log ('sekantis');



const marks10 = [10,2,8,4,6];

let marksArraySum = 0;
x=0
marksArraySum += marks10[x++];
console.log(marksArraySum);
marksArraySum += marks10[x++];
console.log(marksArraySum);
marksArraySum += marks10[x++];
console.log(marksArraySum);
marksArraySum += marks10[x++];
console.log(marksArraySum);
marksArraySum += marks10[x++];
console.log('suma',marksArraySum);

for(let i= marks10.length -3; i<marks10.length; i++){
    console.log (marks10, i, marks10 [i] )

}