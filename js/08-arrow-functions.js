const pirmas = 7;
const antras = 5;

//iprasta funkcija
function suma(a,b) {
    return a+b;
}

const r1 = suma(pirmas,antras);
console.log(r1);

//kintamajam priskirta anonimine funkcija

function atimtis (a,b) {
return a - b;
}
const r2 = atimtis(pirmas,antras)
console.log(r2);

//function dalyba (a,b) {
 /*   return a / b;
    }
    const r3 = dalyba(pirmas,antras)
   console.log(r3); */

//arrow funkcija

// jei logikos bloke {} yra tik viena procedura, tai galime nerasyti {} ir return
//const daugyba = (a,b) => a*b;


const daugyba = (a,b) => {
    return a*b;
}
    const r4 = daugyba (pirmas,antras);
    console.log(r4);


//jei parametru bloke yra tik 1 parametras, tai galime nerasyti ()
const kvadratu  = a => a*a
        const r5 = kvadratu  (pirmas);
        console.log(r5);


