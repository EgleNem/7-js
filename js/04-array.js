const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

/*
ARRAY
- pozicijos prasideda 0
- pozicijos tik sveikieji skaiciai
- ilgis > .length

pazymiu vidurki
pazymiu kiekis
koks maziausias
koks didziausias
mediana
koks pirmas
koks paskutinis: 
// masyvas -> ilgis -> paskutinio pozicija
// [1] -> 1 -> 0
// [1, 2] -> 2 -> 1
// [1, 2, -6] -> 3 -> 2
// [1, 2, -6, 13] -> 4 -> 3

*/

console.log('pirmas:', pazymiai[0]);
console.log('antras:', pazymiai[1]);
console.log('trecias:', pazymiai[2]);


const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis -1;
console.log('Paskutinis:', pazymiai[paskutinioPozicija]);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona', 'Gertruda', 'Aloyzas'];
console.log(studentai);
console.log('----------');

let index = 3 ;
console.log(`Cia yra: ${studentai[index++]}.`);

