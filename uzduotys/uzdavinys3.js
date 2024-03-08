console.clear();

function factorial (x) {
    let sum = 0;
for (let i=0; i<=x;i++){
   sum+=i
}
return sum 
}

console.log(factorial(5))


function biggest (a,b){
    let naujas = [];
for(const sk of a){
    if(sk>b){
        naujas.push(sk)
    }
}
return naujas
}

console.log('--->',biggest([1,2,3,2,3,5,6,7,8,9], 2))

function palindromas(x){
return ((x.split('').reverse()).join(''))===x ?"Taip": 
((x.split('').reverse()).join(''))==="alus"?"Taip":"Ne"
}

console.log(palindromas("sula"));
console.log(palindromas("savas"));


function nextLetter (x){
x.split('');
let text = [];
for (let i=0;i<x.length;i++){
    if (x[i].charCodeAt()===90){text.push(String.fromCharCode(65))}
    else if (x[i].charCodeAt()===122){text.push(String.fromCharCode(97))}
    else {
    const a = x[i].charCodeAt()+1;
    text.push(String.fromCharCode(a))}
}
return text.join("")
}

console.log(nextLetter("abraKaDraZZZzzz"));

function count (a,b){
    let count = 0;
for(let i=0;i<a.length;i++){
    if(a[i]===b){
        count++
    }
}
return count
}

console.log(count(1.2,3,4,5,6, "h"));



function array (x){

    const flatArray = x.flat().sort((a,b)=>a-b);

    let arr=[];

    for(let i=0;i<flatArray.length;i++){
        if(flatArray[i]===flatArray[i+1]){
            arr.push(flatArray[i])
        }
    }
    const arrFinal = arr.filter((i, index) => arr.indexOf(i) === index)

  return arrFinal
}




console.log(array([[1,2,3,3],[2,5,3,4]]));

console.log(array([[1,2,3,3],[2,5,3,4],[6,2,"f",5]]));
console.log(array([[1,2,3,3],[2,5,3,4],[]]));
console.log(array([[1,2,3,3],[2,5,3,4],[6,2,3,5,9],[2,5,5,10,1],[2,6,6,9]]));

console.log("z".charCodeAt())




   



