const prekesKrepselioVerte =1000;
const nuolaidosRiba = 500;
const nuolaidosDydisProcentai = 10

console.log ('skaiciai pries skaiciavima...');



if(prekesKrepselioVerte > nuolaidosRiba){
  console.log('bandom nuolaida')};

  console.log ('tai kokia ta galutine kaina?');
a= "A"
b= "a"
console.log('start');
if(a<b){
    console.log('TAIP, daugiau');
} else {console.log('NE,nera daugiau ');}
console.log('end');
console.log('----')
console.log('start');
if(false){
    console.log('>>>TAIP');
} else {console.log('>>>NE');}
console.log('>>>end');
console.log('---')


if (10<5){ console.log(10);

}else {console.log(5)}

console.log('---')
const cartValue = 500;
const discount = 500;
const discountPercentage = 20; 

if (cartValue>=discount){const coof = 1-(discountPercentage/100);
    console.log("total:",cartValue*coof);
} else {console.log("total:",cartValue)};

console.log('---')

const colors = ['red','green','blue'];
const selectedColor = 'white';

if(selectedColor==colors [0]){
    console.log('PASIRINKTA: RAUDONA.')
}
else if (selectedColor==colors [1]){console.log ('pasirinkta: zalia')}
else if(selectedColor==colors [2]){console.log ('pasirinkta:menlyna')}
else {console.log('tavos palvos nera')}

console.log('---')
const ab = '10';
const bc = 10;

if (ab===bc){
    console.log('taip');
}else {console.log ('ne');
}
console.log ('end');

console.log('--=')
const day = 4

if(day === 1){console.log('Pirmadienis')
}
else if(day === 2){console.log('ANTRADIENIS')}
else if(day === 3){console.log('tRECIADIENIS')}
else if(day === 4){console.log('KETVIRTADIENIS')}
else if(day === 5){console.log('PENKTADIENIS')}
else if(day === 6){console.log('SESTADIENIS')}
else if(day === 7){console.log('SEKMADIENIS')}
else{console.log ('TOKIOS DIENOS NERA')}


const diena = 6
if(diena === 1){
    console.log('Pirmadienis');
}else {
    if(diena===2){console.log('antradienis')}
    else{
        if(diena===3){console.log('treciadienis')
    }else {
if(diena===4){console.log('ketvirtadienis')
}else{
    if (diena===5){console.log('penktadienis')
}else {console.log('atia')}
}
    }
    }
}

const temp = 2
const siltaNuo = 20
const arLyja =true

if (temp>=siltaNuo && arLyja){console.log('silta ir lyja');
}else if (temp<siltaNuo && arLyja){console.log('salta ir lyja');
}else if (temp<siltaNuo && !arLyja){console.log('salta ir nelyja');
}else if (temp>=siltaNuo && !arLyja){console.log('silta ir nelyja')
}else {console.log('variantu neturi');
}

if (temp>=siltaNuo){
    if(arLyja) 
    {console.log('silta ir lyja');}
    else {console.log('silta ir nelyja');}  
}else{if(arLyja){
    console.log('salta ir lyja');
}else{console.log('salta ir nelyja')
}

}