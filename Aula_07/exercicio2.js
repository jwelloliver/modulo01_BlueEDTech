var prompt = require('prompt-sync')();

let quantNota = +prompt("Digite a quantidade de Notas a serem Aplicadas: ");
let valornotas = 0;
const listaNotas = [];
let cont = 0;

while (cont < quantNota) {
    listaNotas.push(+prompt(`Digite a nota do aluno ${cont+1}: `));  
    cont++;
}
for (let cont = 0; cont < listaNotas.length; cont++) {
    if (listaNotas[cont] >= 7) {
   valornotas = valornotas + 1;
   console.log('Quantidade de alunos Aprovados: %d',valornotas);   
        
    }
    
}