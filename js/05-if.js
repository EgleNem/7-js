/*
IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else if {}
- if () {} else if {} else {}
- if () {} else if {} ... else if {} else {}

Palyginimo operatoriai:
-visi: <, >, <=, >=, ==, !=, === , !== (griezta lygybe)
-nadotini: < , >, <=, >=, === , !==
-NEnaudotini: ==, != - del saugumo
=== griezta lygybe - tikrina tipa
== tikrina reiksme


*/

const  a= 7;
const b = 7;

if (a==b) {
    console.log('A yra lygu B');
    
} else {
    console.log('A nera lygu B');
}
console.log('--------------');

const day = 3;

if (day === 1) {
    console.log('pirmaidenis');
}

 else if (day === 2) {
    console.log('antradienis');

} else if (day === 3) {
    console.log('treciadienis');
} else if (day === 4) {
        console.log('ketvirtadienis');
} else if (day === 5) {
    console.log('penktadienis');

}


console.log('--------------------');

const akiuSpalva = 'ruda';

if (akiuSpalva === 'zalia') {
    console.log('Zaliaakiai yra zalciai!');
    
} else {
    if (akiuSpalva === 'melyna') {
        console.log( 'melynes');
    } else {
        if (akiuSpalva === 'ruda'){
        console.log('melagiais');}
        }
    }


    console.log('--------------------');