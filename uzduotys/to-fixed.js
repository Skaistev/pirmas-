function toFixed1(n, f = 0) {

    if (f < 0) {
        return 'ERROR';
    }

    const text = '' + n;
    const parts = text.split('.');


    const sveikojiDalis = parts[0];
    // const desimtaineDalis = parts[1] || ''; // || jei reiksme falsy ('', 0, false, undefined, null)
    const desimtaineDalis = parts[1] ?? ''; // ?? jei reiksme neegzistuoja

    const visas = sveikojiDalis + '.' + desimtaineDalis;

    if (f === 0 && parts[1][0]<5) {

        return sveikojiDalis 
    }
    if (f === 0 && parts[1][0]>=5){
      
       return (''+ (Math.round(visas))) 
    }

    const atrinktaDalis = desimtaineDalis.slice(0,f+1)

    if(atrinktaDalis[f]<5){
        return desimtaineDalis.slice(0,f)
    }

    if(atrinktaDalis[f]>=5){
       return ''+((Number(atrinktaDalis.slice(0,f)))+1)
    }

    

    return sveikojiDalis
}





// console.log(toFixed(3, 0), '-->', '3');
// console.log(toFixed(-3, 0), '-->', '-3');
// console.log(toFixed(3.14, 0), '-->', '3');
// console.log(toFixed(-3.14, 0), '-->', '-3');
// console.log(toFixed(3.11, 1), '-->', '3.1');
// console.log(toFixed(-3.12, 1), '-->', '-3.1');
// console.log(toFixed(3.14, 5), '-->', '3.14000');
// console.log(toFixed(-3.14, 5), '-->', '-3.14000');
// console.log(toFixed(3.1412, 3), '-->', '3.141');
// console.log(toFixed(-3.1412, 3), '-->', '-3.141');
// console.log(toFixed(3.14, 2), '-->', '3.14');
// console.log(toFixed(-3.14, 2), '-->', '-3.14');
// console.log(toFixed(3.14159, 5), '-->', '3.14159');
// console.log(toFixed(-3.14159, 5), '-->', '-3.14159');
// console.log(toFixed(3.14, 4), '-->', '3.1400');
// console.log(toFixed(-3.14, 4), '-->', '-3.1400');
// console.log(toFixed(3.1412, 0), '-->', '3');
// console.log(toFixed(-3.1412, 0), '-->', '-3');
// console.log(toFixed(3.1, 2), '-->', '3.10');
// console.log(toFixed(-3.1, 2), '-->', '-3.10');
// console.log(toFixed(3, 3), '-->', '3.000');
// console.log(toFixed(-3, 3), '-->', '-3.000');

console.log(toFixed(3.14159, 3), '-->', '3.142');
console.log(toFixed(-3.54149,3), '-->', '-3.142');
console.log(toFixed(3.99, 1), '-->', '4');
console.log(toFixed(-3.9, 0), '-->', '-4');


function toFixed(n, f = 0) {
    if (f < 0) {
        return 'ERROR';
    }

    const text = '' + n;
    const parts = text.split('.');
    console.log(parts)

    const sveikojiDalis = parts[0];
    // const desimtaineDalis = parts[1] || ''; // || jei reiksme falsy ('', 0, false, undefined, null)
    const desimtaineDalis = parts[1] ?? ''; // ?? jei reiksme neegzistuoja

    if (f === 0) {

        return sveikojiDalis;
    }

    return sveikojiDalis + '.' + (desimtaineDalis + '0'.repeat(f)).slice(0, f);
}

// const g = "141.59"

// const h = (Number(g))
// console.log(h)

// console.log(parseInt(7.25));
// console.log(parseFloat(7.25));



