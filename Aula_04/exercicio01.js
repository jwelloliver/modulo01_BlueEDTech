var prompt = require('prompt-sync')();

var salario = +prompt("Digite o valor do seu salario atual: ");
var salarioReajustado = 0;

if (salario <= 280) {
    var valorAumento = salario * 0.2 ;
    var salarioReajustado = salario + valorAumento;
    console.log('Seu salario atual e: %d',salario);
    console.log('Seu reajuste foi de 20%');
    console.log('Seu valor de Aumento e: %d', valorAumento);
    console.log('Seu salario reajustado e: %d', salarioReajustado);
    
}else if (salario > 280 && salario <= 700){
    var valorAumento = salario * 0.15 ;
    var salarioReajustado = salario + valorAumento;
    console.log('Seu salario atual e: %d',salario);
    console.log('Seu reajuste foi de 15%');
    console.log('Seu valor de Aumento e: %d', valorAumento);
    console.log('Seu salario reajustado e: %d', salarioReajustado);
}else if (salario > 700 && salario <= 1500){
    var valorAumento = salario * 0.10 ;
    var salarioReajustado = salario + valorAumento;
    console.log('Seu salario atual e: %d',salario);
    console.log('Seu reajuste foi de 10%');
    console.log('Seu valor de Aumento e: %d', valorAumento);
    console.log('Seu salario reajustado e: %d', salarioReajustado);
}else if (salario > 1500){
    var valorAumento = salario * 0.05 ;
    var salarioReajustado = salario + valorAumento;
    console.log('Seu salario atual e: %d',salario);
    console.log('Seu reajuste foi de 5%');
    console.log('Seu valor de Aumento e: %d', valorAumento);
    console.log('Seu salario reajustado e: %d', salarioReajustado);
}