//1  1 a
const a = 1
console.log (a);
const b = 2
console.log (b);
const c = 3
console.log (c);
//1 2 a
const a1 = 'vardenis';
console.log (a1);
const b2 = 'pavardenis';
console.log (b2);
const c3 = 'age';
console.log (c3);
//1 3 a
const sarasas = [10,2,8,4,6]
console.log(sarasas);
const sarasas1 = [-1,0,1,2,3]
console.log(sarasas1);
const sarasas2 = [10,12,14,16,18]
console.log(sarasas2);
//1 4 a
let vardai = [ 'Ana','Ema', 'Ina', 'Ona','Ale'];
console.log(vardai);


const vardas1 = 'Ele';
const vardas2 = 'Ana';
const vardas3 = 'Sake';
const vardas4 = 'Ula';
const vardas5 = 'Ilze';


const vardai1 = [vardas1,vardas2,vardas3,vardas4,vardas5];
console.log(vardai1);

const miestas = ['Vilnius','Kaunas','Klaipeda','Siauliai','Panevezys']
console.log(miestas)


//2 1 a 
const sum = a+b+c;
console.log(sum);
//2 2 a
const visi = `${a1} ${b2} ${c3}`;
console.log(visi);
//2 3 a

let sarasasArraySum = 0;
let index = 0
sarasasArraySum += sarasas[index++];
sarasasArraySum -= sarasas[index++];
sarasasArraySum += sarasas[index++];
sarasasArraySum -= sarasas[index++];
sarasasArraySum += sarasas[index++];
console.log('ats nr.1',sarasasArraySum);

let sarasas1sum = 0
let index1 = -1
sarasas1sum +- sarasas1[++index1];
sarasas1sum -= sarasas1[++index1];
sarasas1sum +- sarasas1[++index1];
sarasas1sum -= sarasas1[++index1];
sarasas1sum +- sarasas1[++index1];
console.log('ats nr.2',sarasas1sum);

let sarasas2sum = 0; ///???? 
sarasas2sum += sarasas1 [0];
sarasas2sum += sarasas1 [1];
sarasas2sum += sarasas1 [2];
sarasas2sum += sarasas1 [3];
sarasas2sum += sarasas1 [4];
console.log ('ats nr.3',sarasas2sum);


//2 4 a
let vardaivisi = '' //????
vardaivisi += vardai [4]+', ';
vardaivisi += vardai [3]+', ';
vardaivisi += vardai [2]+', ';
vardaivisi += vardai [1]+', ';
vardaivisi += vardai [0]+'. ';
console.log(vardaivisi);

let vardaiVisi1 = '';
let z = 4
vardaiVisi1 += vardai1 [z--]+', ';
vardaiVisi1 += vardai1 [z--]+', ';
vardaiVisi1 += vardai1 [z--]+', ';
vardaiVisi1 += vardai1 [z--]+', ';
vardaiVisi1 += vardai1 [z--]+'.';
console.log (vardaiVisi1);

let miestaiVisi = '';
miestaiVisi += miestas [4]+', ';
miestaiVisi += miestas [3]+', ';
miestaiVisi += miestas [2]+', ';
miestaiVisi += miestas [1]+', ';
miestaiVisi += miestas [0]+'.';

console.log (miestaiVisi);




//const sarasasLength = sarasas.length;
//console.log(sarasasLength);

//Funkcijos
//1 a

function tusciaFunkcija (){
    
    return false

};
console.log(tusciaFunkcija());


const ajajai = 20;
ajajai1 = tusciaFunkcija();
console.log(ajajai1);
console.log(tusciaFunkcija());

//2 a
//priima du skaiciaus kintamuosius 
//atskirame kintamamajame isismena sandaugos rezultata
//grazina sandaugos rezultata



const seka2 = [10,20,30];
let w = 0
number1 = seka2 [w++];
number2 = seka2 [w++];
number3 = seka2 [w++];



function daugyba (sk1,sk2){
    
    const sandauga = sk1*sk2;

    return 'sandauga '+ sandauga

};


daugyba(number1,number2);
console.log(daugyba(number1,number2));



daugyba(number3,number2);
console.log(daugyba(number3,number2));

daugyba(number1,number3);
console.log(daugyba(number1,number3));

//3

console.log('----');



function skaitmenuKiekisSkaiciuje (duota) {

    let kintamasis = duota;



    if (typeof(kintamasis) === 'number'&& Number.isFinite(kintamasis)&&kintamasis>=0){ 
        const skaitmenysSkaiciuje = kintamasis.toString().length;
        //console.log ('kiekis skaiciuje ',skaitmenysSkaiciuje);
        return 'kiekis skaiciuje ', skaitmenysSkaiciuje
        }else if(typeof(kintamasis) === 'number'&& Number.isFinite(kintamasis)&&kintamasis<0) {
            const skaitmenysSkaiciuje = (kintamasis*-1).toString().length;
            //console.log (skaitmenysSkaiciuje);
        return 'kiekis skaiciuje ', skaitmenysSkaiciuje}
            else {
                return 'netinkama reiksme'}

    return ('kiekis skaiciuje '), skaitmenysSkaiciuje
 }



   

    



skaitmenuKiekisSkaiciuje (5);
console.log(skaitmenuKiekisSkaiciuje(5))

skaitmenuKiekisSkaiciuje(781);
console.log(skaitmenuKiekisSkaiciuje(781))
//skaitmenuKiekisSkaiciuje(37060123456);
//console.log(skaitmenuKiekisSkaiciuje(37060123456));
//skaitmenuKiekisSkaiciuje(true);
//console.log(skaitmenuKiekisSkaiciuje(true));
//skaitmenuKiekisSkaiciuje('asd');
//console.log(skaitmenuKiekisSkaiciuje('asd'));
//skaitmenuKiekisSkaiciuje(NaN);
//console.log(skaitmenuKiekisSkaiciuje(NaN));

///Kintamuju palyginimas///


//1 

skaitmuo1 = 60
skaitmuo2 = 80


    

    ///
    if (skaitmuo1>skaitmuo2){console.log(' > Pomidoras');}else {console.log ('Bandykite kita karta')}
    if (skaitmuo1<skaitmuo2){console.log(' < Pomidoras');}else {console.log ('Bandykite kita karta')}
    if (skaitmuo1===skaitmuo2){console.log(' === Pomidoras');}else {console.log ('Bandykite kita karta')}
    if (skaitmuo1!==skaitmuo2){console.log(' !== Pomidoras');}else {console.log ('Bandykite kita karta')}
    if (skaitmuo1>=skaitmuo2){console.log(' >= Pomidoras');}else {console.log ('Bandykite kita karta')}
    if (skaitmuo1<=skaitmuo2){console.log(' <= Pomidoras');}else {console.log ('Bandykite kita karta')}

//2. 
tekstas1 = "tekstas1";
text2 ="text2";
const aaa = tekstas1.length;
const bbb = text2.length;
console.log(aaa,bbb);

///3.
if (aaa===bbb){console.log(' === Pomidoras');}else {console.log ('Bandykite kita karta')}
if (aaa>=bbb){console.log(' >= Pomidoras');}else {console.log ('Bandykite kita karta')}
if (aaa<=bbb){console.log(' <= Pomidoras');}else {console.log ('Bandykite kita karta')}
if (aaa>bbb){console.log(' > Pomidoras');}else {console.log ('Bandykite kita karta')}
if (aaa<bbb){console.log(' < Pomidoras');}else {console.log ('Bandykite kita karta')}
if (aaa!==bbb){console.log(' !== Pomidoras');}else {console.log ('Bandykite kita karta')}


// if (skaitmuo1===skaitmuo2&&(skaitmuo1>=skaitmuo2||skaitmuo1<=skaitmuo2)){console.log ('---pomidoras');
// }else {console.log('bandyk vel')}
// if (skaitmuo1!==skaitmuo2&&(skaitmuo1>=skaitmuo2||skaitmuo1<=skaitmuo2))
// {console.log('---pomidoras');
// }else {console.log('bandyk vel');}

//4.
saras1 = [1,2,3,4,5];
saras2 = [1,2,3,4,5,6,7,8];
let ccc =saras1.length;
let ddd =saras2.length;
console.log (ccc,ddd);

if (ccc===ddd){console.log(' === Pomidoras');}else {console.log ('Bandykite kita karta')}
if (ccc>=ddd){console.log(' >= Pomidoras');}else {console.log ('Bandykite kita karta')}
if (ccc<=ddd){console.log(' <= Pomidoras');}else {console.log ('Bandykite kita karta')}
if (ccc>ddd){console.log(' > Pomidoras');}else {console.log ('Bandykite kita karta')}
if (ccc<ddd){console.log(' < Pomidoras');}else {console.log ('Bandykite kita karta')}
if (ccc!==ddd){console.log(' !== Pomidoras');}else {console.log ('Bandykite kita karta')}

//ciklo for panaudojimas

//1 .



const inter = [0,1,2,3,4];

let suma = 0;
op = 0
suma += inter[op++];

suma += inter[op++];

suma += inter[op++];

suma += inter[op++];

suma += inter[op++];

console.log('suma',suma);

for (let i=0; i<6; i++){
 
console.log (sum); }










