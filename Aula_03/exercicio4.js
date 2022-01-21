var prompt = require('prompt-sync')();

const num1 = +prompt("Digite um valor A: ");
const num2 = +prompt("Digite um valor B: ");

if (num1 % num2 == 0) {
    console.log('O Valor %d e valor %d São multiplos', num1, num2);
} else {
    console.log('O Valor %d e valor %d Nao São multiplos', num1, num2);
}