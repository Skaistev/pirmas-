
import spausdintiSvente from './spausdintiSvente.js';

const name1 = 'jonas';
const name2 = 'Mryte';
const name3 = 'Petras';
const name4 = 'Ona';

const marks1 =[];
const marks2 =[10];
const marks3 =[2,4,6];
const marks4 =[9,9,9];

const phone1 = '8612314542';
const phone2 = '8612315625';
const phone3 = '8612314599';

const student1 = [name1,marks1,phone1];
const student2 = [name2,marks2,phone2];
const student3 = [name3,marks3,phone3];
const student4 = [name4,marks4,null];


const students = [student1, student2, student3, student4];
console.log(students);
console.log(students [2][2]);
console.log('--------------------');


const s1 = {
name: 'Jonas',
marks: [],
phone: '860141562',
};
console.log (s1);

const s2 = {
name: 'Maryte',
marks: [10],
phone: '860141599',
};
console.log (s2);

const s3 = {
name: 'Petras',
marks: [10, 9,2],
phone: '868622456',
 };
console.log (s3);

console.log(s3['name'], s3['marks'][0], s3['phone'].slice(-3));

const pazymiaiObject = {
    0: 10,
    1: 2,
    2: 8,
    3: 4,
    4: 6,
};

console.log (pazymiaiObject[1]);

console.log ('----=======------');

// vasara:
// menesiu pavadinimai;
// kiekvienas menesis turi skirtinga dienu skaiciu;
// svenciu sarasas;
// kasdieninis vid. temperaturoas

const summer = {
    title: {
        lt:'vasara',
        en:'summer'
    },
    months: ['Birzelis','Liepa','Rugpjutis'],
    days: [30,31,31],
    holidays:[
        {
            name:'Jonines',
            date: {
                year: 2024,
                month: 6,
                day: 23,
            }},{
            name:'Mindaugines',
            date: {
                    year: 2024,
                    month: 7,
                    day: 6,
            }},{
                name: 'Zolines',
                date:{
                    year: 2024,
                    month: 8,
                    day:15, }},
        
    ]
}

console.log(summer['months'][0]);
console.log(summer['months'][1]);
console.log(summer['months'][2]);
console.log (summer['title']);
console.log (summer['title']['en']);
console.log(summer['days'][1]);
console.log(summer['holidays']);

///supaprastinta objekto sintakse

console.log('--=======----');

console.log(summer.title.lt);
console.log(summer.holidays[0].name);
console.log (summer.holidays[0].date.year);
console.log (summer.holidays[0].date.month);
console.log (summer.holidays[0].date.day);




//1) Jonines - 2024 m. birzelio 23 d.
//2) Mindaugo karunavimas - 2024 m. liepos 6 d. 
//3) Zolines - 2024 m. rugpjucio 15 d.


for( let i=0; i<summer.holidays.length; i++){
 
         const text = spausdintiSvente(i,summer.holidays[i]);
         console.log(text);

    
}



