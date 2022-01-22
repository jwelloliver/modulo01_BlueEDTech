var prompt = require('prompt-sync')();

// Usuario entra com numero:
var num1 = 0;
// usando estrutura de repetição caso numero digitado seja menor que 1 ou maior que 10;
while (num1 < 1 || num1 > 10) {
    var num1 = +prompt("Digite um numero de 1 a 10: ");
    if (num1 < 1 || num1 > 10) {
        console.log("Numero Invalida");
    }
}
// Gerando numeros inteiros eleatorio de 0 a 10 usando a Math.random() e Math.floor retirando o flutuante:
var numAleatorio = Math.floor (Math.random() * 10);
console.log(numAleatorio);

if (num1 === numAleatorio) {
    console.log("venceu");
} else {
    console.log("perdeu");
}