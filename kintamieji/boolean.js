//boolean - logine reiksme 
const arRytas = true;
const arVakaras = false;
console.log('Ar rytas:',arRytas);
console.log('Ar vakaras:',arVakaras);

const isnotRaining = true;
const isMorning = true;
const isWarm = true;
const isRaining = false;

//galima, jeigu: silta ir ne lyja 

const argalima = isWarm && isnotRaining;
const argalima2 = isWarm && isRaining;
console.log('rieduciai',argalima);
console.log('rieduciai',argalima2);

const arGrazus = true
const arAukstas = false
const arTurtingas = true

const arPasimatymas = arGrazus && arAukstas && arTurtingas 
console.log('pasimatymas',arPasimatymas);

const arPasimatymas2 = arGrazus || arAukstas || arTurtingas;
const arPasimatymas3 = (arGrazus || arAukstas) && arTurtingas 
console.log('pasimatymas',arPasimatymas3);

const arPasimatymas4 = arGrazus || arAukstas && arTurtingas 
console.log('pasimatymas',arPasimatymas4);
console.log(1,true && (false ||true))