var prompt = require('prompt-sync')();

const nomeAluno = [];
const notaAluno = [];
let cont = 0;
let mediaTotal = 0;

let quantAluno = +prompt("Digite a quantidade de Aluno: ");

while (cont < quantAluno) {
    nomeAluno.push(prompt(`Digite o nome do aluno: `));
    notaAluno.push(+prompt(`Digite a nota desse aluno: `));
    mediaTotal = mediaTotal + notaAluno[cont];
    cont++;
}
cont = 0;
while (cont < quantAluno) {
    console.log(`O aluno ${nomeAluno[cont]} tirou nota ${notaAluno[cont]} `); 
    cont++;  
}
console.log(`Media total das notas e: ${mediaTotal/notaAluno.length}`);