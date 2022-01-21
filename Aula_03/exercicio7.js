var prompt = require('prompt-sync')();
console.log("\n Responda Sim ou Nao: \n");

var per1 = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?: ");
var per2 = prompt("Você conseguiu consertar os reatores nucleares do motor de dobra?: ");
var per3 = prompt("Você sabe programar em javaScript?: ");
var per4 = prompt("Você sabe usar Banco de dados relacionais?: ");
var per5 = prompt("Você ja Fez alguma Faculdade?: ");

var rsp = 0;

if (per1 === per2 && per3 === per4 && per1 === per5) {
    console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações");    
}else if (per1 != per2 && per3 != per4) {
    console.log("erro");
}
