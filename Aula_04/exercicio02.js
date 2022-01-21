var prompt = require('prompt-sync')();

// Usuario entra com numero:
var num1 = +prompt("Digite um numero: ");

// Gerando numeros inteiros eleatorio de 0 a 10 usando a Math.random() e Math.floor retirando o flutuante:
var numAleatorio = Math.floor (Math.random() * 10);
console.log(numAleatorio);

if (num1 === numAleatorio) {
    console.log("venceu");
} else {
    console.log("perdeu");
}