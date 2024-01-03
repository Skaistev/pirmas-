const n1=7;
const n2=5;

function suma (a,b)
{return a+b;
}
console.log (`${n1}+${n2}=${suma(n1,n2)}`);

const minus = function (a,b)
{return a-b;
}
console.log (`${n1}-${n2}=${minus(n1,n2)}`);

///arrow function - rodykline funkcija;
const multiply = (a,b) => {return a*b;}

console.log (`${n1}*${n2}=${multiply(n1,n2)}`);


//jei logikos bloke yra  1 salyga,galima nerasyti {return}
const divide = (a,b) =>  a/b;
console.log (`${n1}/${n2}=${divide(n1,n2)}`);


function square  (a){
    return a**2;
}
console.log (`${n1}/${n1}=${square(n1)}`);

const kubas = a=> a**2;

console.log (`${n1}/${n1}=${kubas(n1)}`);

function abbriavation  (text) {
    const words = text.split('');
    return words [0][0]+'.'+ word[1][0]+'.';
}

const abbr = t =>t.split(' ').map(s=>s[0]+'.').join('');
console.log (abbr('jeses'));
console.log (abbr('chuck norris'));