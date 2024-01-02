

const a = 'labas';
console.log (a, typeof a);
console.log (a.length);

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[2220]);
console.log(a[-1]);
console.log(a[2.5]);
console.log('--------');

console.log(a.at(0)); /// tas pats, kas a[0]
console.log(a.at(-1));
console.log(a[a.length-1]); // simboliai is eiles galo, nesvarbu, kokio ilgio eile. 

console.log (a.includes('a'));
console.log (a.includes('d'));
// simbolio paieska 

console.log (a.indexOf('a'));
console.log (a.indexOf('l'));
console.log (a.indexOf('a', 1));
//nurodo simbolio vieta eileje (indeksa)

console.log ('Labas'.startsWith('l'));
console.log ('Labas'.endsWith('s'));
//prasideda arba baigiasi simboliu, true arba false


console.log ('labas'.charAt(2));
console.log ('labas'.at(5415));
// abu daro ta pati, chartAt nerandes simbolio nieko negrazina.

console.log ('labas'.charCodeAt(4));

console.log (String.fromCharCode(76));
console.log (String.fromCharCode(100));
console.log (String.fromCharCode(100));

// raidziu koduote skaiciais 

console.log ('----')

console.log ('labas'.repeat(0));
console.log ('labas '.repeat(3));
console.log ('labas'.repeat(3)+ '.');
// grazina ta pati teksta nurosyta kartu skaiciu 
console.log('----');


console.log('labas'.slice(0));
console.log('labas'.slice(0,0));
console.log('labas'.slice(0,1));
console.log('labas'.slice(0,5));
console.log('labas'.slice(2,5));
console.log('labas'.slice(2,3));

/// isgauti dali teksto

console.log('labas '.repeat(5).slice(0,-1)+'.');
 console.log ('----');
 console.log ('kopustas'.replace('p','k'));
console.log ('vasara'.replace('a','-'));

const vasara = 'vasara'.replace('a','-').replace('a','-').replace('a','-');

console.log (vasara);

const kisk = 'bepasikiskekopusteliaudamasis'
.replaceAll('i','-');
console.log (kisk);

const aaaa= 'kakaaaa'.replace('a','-', 4);
console.log ('--->',aaaa);

console.log('----');


const sakinys = 'Siandien yra labai grazi Nauju metu diena!';

const dalys = sakinys.split(' ');
console.log (dalys);
console.log(dalys.length);

const dalys2 = 'labas'.split('');
console.log (dalys2[1]);
console.log(dalys2.length);
console.log('labas'.length)
