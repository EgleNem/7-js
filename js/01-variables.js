/* 
KINTAMIEJI:

Iniciavimo budas:
const - default iniciavimo budas
let - antrinis budas inicijuoti, kai zinome, kad reiksme tures keistis
var - pats seniausias, geriau niekada nenaudoti, jei rupi saugumas:D

--cannot be reserved keyword
--should be meaningful
--cannot start with number (!name)
--cannot contain a space or hyphen (-)
--are case-sensitive


Duomenu tipas: 
-number, 
-string (tekstas), 
-boolean (logine reiksme: true | false)
- array (masyvas, sarasas, )
*/

const skaicius = 123;
console.log(skaicius);

let pinigine = 0;
console.log('Pinigine:', pinigine);

pinigine = 0;
console.log('Pinigine:',pinigine);

const Petras = 1323414;
const vardas = 'Petras';
const pasisveikinimas = 'Laba diena, ' + vardas + '.';
console.log(Petras);
console.log(vardas);

console.log ('Laba diena, ' + vardas + '.' );
console.log(pasisveikinimas)

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;
console.log(' Ar vedes?', arVedes);
console.log('Ar turi vaiku?', arTuriVaiku);
console.log('Ar meluoja?', arMeluojaDelVaiku);

console.log(1, 2, 3);

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

const studentai = ['petras', 'maryte', 'jonas']
console.log( 'studentai:', studentai, );

const booleanList = [true, false, true, false, true, false];
console.log(booleanList);

const obuolys = 1;
console.log(obuolys);

const kriause = 3;
console.log(kriause);

const pomidoras = 5;
console.log(pomidoras);

const mama = 'Rasa'
console.log(mama);

const tetis = 'Dalius'
console.log(tetis);

const sese = "Indre"
console.log(sese);

const kedes = [1, 4, 5, 6]
console.log('Kedes:', kedes);

const geriausiDraugai = ['Tomas', 'Lilija', 'Audra', 'Marius', 'Ona'];
console.log(geriausiDraugai);

console.log(obuolys + kriause + pomidoras);

console.log(mama,  tetis, sese);

const arSese = true
console.log('Ar Indre sese?', arSese);

const arMama = true;
console.log('Ar Rasa mano mama?', arMama)

let name = 'Egle';
name = 'monika'; 

console.log(name);

let firstName = 'egle';
let lastName = 'nemickaite';

console.log(2**4);
console.log(13%5);

