var prompt = require('prompt-sync')();
console.log("\n ##### Jogo Jokenpô ##### \n ")

let rodadas = +prompt('Digite numero de rodadas: ');
let cont = 0;
let vitoriaMinha = 0;
let vitoriaPc = 0 ;

const listaJogo = ['PEDRA','PAPEL','TESOURA'];

while (cont < rodadas) {
    var minhaEscolha = prompt("Digite entre Pedra, Papel ou Tesoura: ").toUpperCase();

    const pcEscolha = listaJogo[Math.floor(Math.random() * listaJogo.length)];

    console.log(`\n Minha Decisao: ${minhaEscolha}`);
    console.log(` Decisao do compudator: ${pcEscolha}\n`);

    if (pcEscolha == 'PEDRA' && minhaEscolha == 'TESOURA') {    
        console.log("Computador Ganhou !!");
        vitoriaPc = vitoriaPc + 1;    
    }if (minhaEscolha == 'PEDRA' && pcEscolha == 'TESOURA') {
        console.log("Voce Ganhou !!");
        vitoriaMinha = vitoriaMinha + 1;    
    }if (pcEscolha == 'PEDRA' && minhaEscolha == 'PAPEL') {
        console.log("Voce Ganhou !!");
        vitoriaMinha = vitoriaMinha + 1;  
    }if (minhaEscolha == 'PEDRA' && pcEscolha == 'PAPEL') {
        console.log("Computador Ganhou !!");
        vitoriaPc = vitoriaPc + 1;
    }if (minhaEscolha == 'TESOURA' && pcEscolha == 'PAPEL') {
        console.log("Voce Ganhou !!");
        vitoriaMinha = vitoriaMinha + 1;  
    }if (pcEscolha == 'TESOURA' && minhaEscolha == 'PAPEL') {
        console.log("Computador Ganhou !!");
        vitoriaPc = vitoriaPc + 1;
    }if (pcEscolha == minhaEscolha) {
        console.log("Ninguem Ganhou !!");
    }
   
    cont++;
}  
if (vitoriaMinha > vitoriaPc) {
    console.log(`Você venceu com total de vitoria: ${vitoriaMinha}`);
    console.log(`computador perdeu com total de vitoria: ${vitoriaPc}`);    
}else{
    console.log(`O computador venceu com total de vitoria: ${vitoriaPc}`);
    console.log(`Você perdeu com total de vitoria: ${vitoriaMinha}`);
}