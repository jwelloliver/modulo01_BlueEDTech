var prompt = require('prompt-sync')();

function calculadora(num1, num2, operador){
   
    if (operador === '+') {
        let soma = (num1 + num2);
        console.log(`O resultado da divisão de ${num1}+${num2} = ${soma}`);
    }if (operador === '-'){
        let subtracao = (num1 - num2);
        console.log(`O resultado da divisão de ${num1}-${num2} = ${subtracao}`); 
    }if (operador === '*') {
        let multiplicacao = (num1 * num2); 
        console.log(`O resultado da divisão de ${num1}x${num2} = ${multiplicacao}`); 
    }if (operador == '/') {
        let divisao = (num1 / num2);
        console.log(`O resultado da divisão de ${num1}/${num2} = ${divisao}`);      
    } 
    
}

console.log("### Calculadora ###\n")

let a = +prompt("Digite primeiro numero: ")
let op = prompt("Escolha operador: + , -, * e / : ");
let b = +prompt("Digite segundo numero: ")

calculadora(a,b,op);