const pazymiai = [10, 2, 8, 4, 6 ];
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

//LOOP = for, while, for-in, for-of, foreach,....

// FOR
let sumFor = 0;

for (let i1= 0; i1 <pazymiai.length; i1++) {
    const pazymys  = pazymiai [i1];
    console.log(pazymys);
    sumFor += pazymys;

    console.log(`${i1}) pazymys ${pazymys} [${sumFor}]`);
}
//WHILE 
console.log('------------');
let sumaWhile = 0;
let i2 = 0;

while(i2<pazymiai.length) {
    const pazymys  = pazymiai [i2];
    console.log(pazymys);
    sumaWhile += pazymys;

    console.log(`${i2}) pazymys ${pazymys} [${sumaWhile}]`);
    i2++;

}
 
//FOR-OF
console.log('------------');
let sumaForOF = 0;
let i3= 0; 
for (const pazymys of pazymiai){
    console.log(pazymys);
    console.log(`${i3++}) pazymys ${pazymys} [${sumaForOF}]`);

}

// FOREACH - pats leciausias 
 /* console.log('------------');
let sumaForEach = 0;
pazymiai.forEach((a,b,c) => {
    console.log(a,b,c);
})
// a - pazymys, b- i4, c - pazymiai (masyvas)*/

console.log('------------');
let sumaForEach = 0;
pazymiai.forEach ((pazymys, i4) => {
    sumaForEach += pazymys;
    console.log(`${i4}) pazymys ${pazymys} [${sumaForEach}]`);
});

// () => {}  - 