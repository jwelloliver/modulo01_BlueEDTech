var prompt = require('prompt-sync')();

const listIdade =[];
const listAltura = [];
let mediaIdade = 0;
let mediaAltura = 0;
let cont = 0;
 while (cont < 5) {
    listIdade.push(+prompt(`Digite sua Idade: `));
    listAltura.push(+prompt(`Digite sua Altura: `));
    mediaIdade = mediaIdade + listIdade[cont];
    mediaAltura = mediaAltura + listAltura[cont];
    
    cont++;
 }
 
mediaIdade = (mediaIdade/listIdade.length);
mediaAltura = (mediaAltura/listAltura.length);

console.log(`A media de idade e: ${mediaIdade}`);
console.log(`A media de Altura e: ${mediaAltura}`);