const pazymiai = [10, 2, 8, 4, 6, 3, ];
//kiekis neribotas ir is anskto  nezinomas 
/*
let pazymiuSuma = 0;
const pazymiuKiekis = pazymiai.length;


let index = 0;
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[index++];
pazymiuSuma += pazymiai[3];
pazymiuSuma += pazymiai[4];
pazymiuSuma += pazymiai[5];
pazymiuSuma += pazymiai[6];
pazymiuSuma += pazymiai[7];
pazymiuSuma += pazymiai[8];

const vidurkis = pazymiuSuma / pazymiuKiekis;
console.log(vidurkis);

*/ //TRUMPINAM > CIKLAS/LOOP: for (visus galima parasyti su for), while, for-in, for-of, foreach,...
// reikia zinoti kiek reikes kartoti, kokio ilgio ciklas, tada galima naudoti for.
// i - index, i+=2, i+=2.22 kaip keistusi ciklas, koki dydzio

/* console.log('START');
for (let i= 0; i<5; i++) {
    console.log('PIRMASi', i);
}
console.log('END');

for (let i= 0; i<7; i++) {
    console.log('ANtras', i);
}
console.log('FINISH'); 
*/

let suma = 0;

for (let i= 0; i<pazymiai.length; i++) {
    const pazymys  = pazymiai [i];
    console.log(pazymys);
    suma += pazymys;

    console.log(`${i}) pazymys ${pazymys} [${suma}]`);
}
console.log('Galutine suma', suma);

const vidurkis = suma / pazymiai.length;
console.log('Vidurkis', vidurkis);