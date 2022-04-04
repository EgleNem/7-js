///nd ciklo for panaudojimas 1. 

function sumaIntervale(nuo, iki){
    let suma =0;
    for (let i=nuo; i<= iki ; i++){
    suma +=i;
    } 
    return suma;
}
//console.log(sumaIntervale(0,0), '-->', 0);
console.log(sumaIntervale(10,14), '-->', 10);