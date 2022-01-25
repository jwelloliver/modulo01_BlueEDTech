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
    if (valorSaque > 100) {
        notas100 = Math.floor(valorSaque / 100);
        valorSaque = valorSaque % 100;
    }
}   else {
    console.log("Valor nao disponivel para saque")
    }
    if (notas100 > 0) {
        console.log('%d Notas de R$100,00',notas100);

    }if (valorSaque > 50) {
        notas50 = Math.floor(valorSaque / 50);
        valorSaque = valorSaque % 50;

    }if (notas50 > 0) {
        console.log('%d Notas de R$50,00',notas50);

    }if (valorSaque > 10) {
        notas10 = Math.floor(valorSaque / 10);
        valorSaque = valorSaque % 10;

    }if (notas5 > 0) {
        console.log('%d Notas de R$10,00',notas10);

    }if (valorSaque > 5) {
        notas5 = Math.floor(valorSaque / 5);
        valorSaque = valorSaque % 5;

    }if (notas5 > 0) {
        console.log('%d Notas de R$5,00',notas5);

    }if (valorSaque > 1) {
        notas1 = valorSaque / 1;

    }if (notas1 > 0) {
        console.log('%d Notas de R$1,00',notas1);
    }
    