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
Funkcija 
*/













