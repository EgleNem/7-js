/* visi mokiniai turi tik KETURIS pazymius ir reikia suskaiciuoti vidurki
*/



const petras = [10, 6, 8, 2];
const maryte = [5, 9, 7, 6];
const jonas = [7, 3, 8, 2];
const ona = [1, 5, 7, 10];


/*
let petroSuma = 0;
petroSuma += petras[0];
petroSuma += petras[1];
petroSuma += petras[2];
petroSuma += petras[3];
const petroKiekis = petras.length;
const petroVidurkis = petroSuma / petroKiekis;
console.log('Petras', petroVidurkis);


let maryteSuma = 0;
maryteSuma += maryte[0];
maryteSuma += maryte[1];
maryteSuma += maryte[2];
maryteSuma += maryte[3];
const maryteKiekis = maryte.length;
const maryteVidurkis = maryteSuma / maryteKiekis;
console.log('maryte', maryteVidurkis);

let jonasSuma = 0;
jonasSuma += jonas[0];
jonasSuma += jonas[1];
jonasSuma += jonas[2];
jonasSuma += jonas[3];
const jonasKiekis = jonas.length;
const jonasVidurkis = jonasSuma / jonasKiekis;
console.log('jonas', jonasVidurkis);

let onaSuma = 0;
onaSuma += ona[0];
onaSuma += ona[1];
onaSuma += ona[2];
onaSuma += ona[3];
const onaKiekis = ona.length;
const onaVidurkis = onaSuma / onaKiekis;
console.log('ona', onaVidurkis);
*/
// Trumpinam > kuriam funkcija
// function (parametru blokas) {logikos blokas}, return - visada grazina rezultata, 

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];

    return pazymiuSuma / pazymiuSarasas.length;
}
//iskvietimas fcijos
const petroVidurkis = vidurkis(petras)
console.log('Petras:', petroVidurkis);

const marytesVidurkis = vidurkis(maryte)
console.log('Maryte:', marytesVidurkis);

const jonoVidurkis = vidurkis(jonas)
console.log('Jonas:', jonoVidurkis);

const onosVidurkis = vidurkis(ona)
console.log('Ona:', onosVidurkis);


/*
Funkcija gauna varda ir turi grazinti sakini:
"Vardo pirma raide yra [V] ir vardas sudarytas is 5 raidziu."
*/

function vardoAnalize(name) {
    return `Vardo pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`
}

//stringas yra simboliu masyvas, todel pirmas vnt yra 0,

const petrukoVardas = vardoAnalize('Petras');
console.log(petrukoVardas);

const marytesVardas = vardoAnalize('Maryte');
console.log(marytesVardas);

const jonoVardas = vardoAnalize('Jonas');
console.log(jonoVardas);


const onosVardas = vardoAnalize('Ona');
console.log(onosVardas);

/* Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu, pvz.:
2 + 2 =4
*/

//function suma(pirmasSkaicius, antrasSkaicius) {
 //  return `${pirmasSkaicius} + ${antrasSkaicius} =  5`
//} SUPAPRASTINAM 

function suma(a, b) {
    return `${a} + ${b} =  ${a + b}`
   }

const s1 = suma(2, 3, );
console.log(s1);

const s2 = suma(0.1, 0.2);
console.log(s2);

const s3 = suma(-88, -11);
console.log(s3);

/*
desimtainis dvejetainis
0           000
1           001
2           010
3           011
4           100
5           101
6           110
7           111
8           1000


0.55         5.5*10^-1    [Sveika dalis, desimtaine, laipnis]
0.0714       7.14*10^-2   [7, 14, -2]
*/








