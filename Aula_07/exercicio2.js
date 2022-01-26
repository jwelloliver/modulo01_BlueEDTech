var prompt = require('prompt-sync')();

let quantNota = +prompt("Digite a quantidade de Notas a serem Aplicadas: ");
let notasAprovadas = 0;
let notasReprovados = 0;
let notasRecuperacao = 0;
const listaNotas = [];
let cont = 0;

while (cont < quantNota) {
    listaNotas.push(+prompt(`Digite a nota do aluno ${cont+1}: `));  
    cont++;
}
for (let cont = 0; cont < listaNotas.length; cont++) {
    if (listaNotas[cont] >= 7) {
   notasAprovadas = notasAprovadas + 1;        
    }
    if (listaNotas[cont] > 5 && listaNotas[cont] > 7) {
        notasRecuperacao = notasRecuperacao + 1;        
        }
    if (listaNotas[cont] < 5) {
        notasReprovados = notasReprovados + 1;
        } 
             
}
console.log('Quantidade de alunos Aprovados: %d',notasAprovadas); 
console.log('Quantidade de alunos Recuperação: %d',notasRecuperacao);
console.log('Quantidade de alunos Reprovados: %d',notasReprovados);