var prompt = require('prompt-sync')();

 let cont = 0;
const listNum = [];
const listPar = [];
const listImpar = [];

while (cont < 20 ) {
    listNum.push(+prompt(`${cont+1} - Digite um numero inteiro: `));
     if (listNum[cont] % 2 == 0 ) {
         listPar.push(listNum[cont]);         
     } else {
        listImpar.push(listNum[cont]);        
    }
    cont++;
}
console.log(`A lista de numeros inteiros: ${listNum}`);
console.log(`A lista ordenada em Pares: ${listPar}`);
console.log(`A lista ordenada em Impares: ${listImpar}`);