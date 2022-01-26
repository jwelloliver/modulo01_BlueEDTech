var prompt = require('prompt-sync')();

const listPares = [];
const listimpares = [];
const numero = [];
let cont = 0;

let num = +prompt('Digite um numero inteiro: ');

while (cont <= num) {
   numero.push(cont);
   cont++; 
}
console.log(`Os numeros gerados são : ${numero}`);
cont = 0;

while (cont <= num ) {
     if (numero[cont] % 2 == 0 ) {
         listPares.push(numero[cont]);         
     } else {
        listimpares.push(numero[cont]);        
    }
    cont++;
}
console.log(`Os numeros Pares sao: ${listPares}`);
console.log(`Os numeros Impares sao: ${listimpares}`);
