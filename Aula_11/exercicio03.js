var prompt = require('prompt-sync')();

const temp = prompt("Digite sua temperatura: ");
const opr = prompt("Digite temperatura ex: C, K, F: ").toUpperCase();

temperatura(temp,opr);

function temperatura(num1, op) {
    let celsius;
    let kevin;
    let far;
    if (op === 'C') {
        celsius = num1;
        kevin = (num1 + 273.15);
        far = ((num1 * 1.8)+32);
        
    }else if (op === 'F') {
        far = num1;
        celsius = ((num1 - 32)/1.8);
        kevin = celsius + 273.15;
    }
    else if (op === 'K') {
        kevin = num1;
        celsius = (num1 - 273.15);
        far = ((num1+459.67)/1.8);

    }else{
        console.log("Tipo errado")
    }
    console.log(`temperatura em celsius: ${celsius} °c`);
    console.log(`temperatura em Kelvin: ${kevin} K`);
    console.log(`temperatura em Fahrenheit: ${far} °F`);
    
    let retorno = prompt("Qual temperatura deseja retornar? (Ex: F, K ou C) ").toUpperCase();

    if(retorno == "C"){
        return celsius;
    }else if(retorno == "K"){
        return kevin;
    }else if(retorno == "F"){
        return far;
    }else{
        console.log("tipo errado");
    }
}