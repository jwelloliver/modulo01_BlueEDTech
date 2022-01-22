var prompt = require('prompt-sync')();

// Caixa eletronico, o usuario deve informa o valor do saque:
console.log("\nCAIXA ELETRONICO\n");
var valorSaque = +prompt("Digite o valor do saque: ");
var notas1 = 0;
var notas5 = 0;
var notas10 = 0;
var notas50 = 0;
var notas100 = 0;
var sq = 0;

if (valorSaque >= 10 || valorSaque <= 600) {
    if (valorSaque >= 100) {
        notas100 = Math.floor(valorSaque / 100);
        sq = valorSaque % 100;
        console.log(sq);
    }if (sq >= 50) {
        notas50 = Math.floor(valorSaque / 50);
        sq = valorSaque % 50;
        console.log(sq);
    }
    
}else {
    console.log("Valor nao disponivel para saque");
}