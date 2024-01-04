const n1=7;
const n2=5;

function suma (a,b)
{return a+b;
}
console.log (`${n1}+${n2}=${suma(n1,n2)}`);

///funkcijos priskyrimas kintamajam 

const minus = function (a,b)
{return a-b;
}
console.log (`${n1}-${n2}=${minus(n1,n2)}`);

///arrow function - rodykline funkcija;

const multiply1 = function (a,b) {

    return a*b; 
}

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




function abbriav  (text) {
    const words = text.split(' ');
    console.log(words)
    if (words.length===1){
        return words [0][0]+'.';
    }if (words.length===2){
    return words [0][0]+'.'+ words[1][0]+'.';
    }if (words.length===3){
        return words [0][0]+'.'+ words[1][0]+'.'+words[2][0]+'.'; 
    }
return "per daug zodziu"
}


function abbriav2  (text) {
    const words = text.split(' ');
    let ans = '';
    if (words.length>0){
        ans += words [0][0]+'.';
    }if (words.length>1){
        ans += words [1][0]+'.';
    }if (words.length>2){
        ans += words [2][0]+'.';
    }
return ans
}

function abbriav3  (text) {
    const words = text.split(' ');
    let ans = '';
    for (let i=0;i<words.length;i++){
        const word = words[i];
        ans+=word[0]+'.';
    }
return ans
}
console.log ('ab',abbriav('jan clod vandame'));
console.log('ab2',abbriav2('jan clod van dame'));
console.log('ab3', abbriav3('jan clod van dame dam dam rom'));

const abbr = t =>t.split(' ').map(s=>s[0]+'.').join(''); 


console.log (abbr('jeses'));
console.log (abbr('chuck norris'));
console.log(abbr('jan clod van dam'));

const kaimas = 'jonas, antanas, aloyzas, martynas';
console.log(kaimas.split(' ').map(a=>a[1]+'.').join(''));

