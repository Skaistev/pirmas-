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

console.log(biggest([1,2,3,2,3,5,6,7,8,9], 2))

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
    const a = x[i].charCodeAt()+1;
    text.push(String.fromCharCode(a))   
}
return text.join("")
}

console.log(nextLetter("skaiste"));

function count (a,b){
    let count = 0;
for(let i=0;i<a.length;i++){
    if(a[i]===b){
        count++
    }
}
return count
}

console.log(count("aaaaaabbcc", "h"));

function array (x){

    


}
console.log(array([1,2,3,3],[1,2,3]));
