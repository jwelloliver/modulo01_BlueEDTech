var prompt = require('prompt-sync')();

var num1 = +prompt("Digite um numero: ");
var num2 = +prompt("Digite outro numero: ");

if (num1 > num2){
    console.log('O primeiro número é maior');
} else if (num1 < num2){
    console.log('O segundo número 2 é maior');
} else {
    console.log('Os dois números são iguais.');
}