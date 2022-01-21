var prompt = require('prompt-sync')();

var num1 = +prompt("Digite um numero: ");

if (num1 % 2 == 0) {
    console.log('Esse numero e Par');
} else {
    console.log('Esse Numero e Impar');
}