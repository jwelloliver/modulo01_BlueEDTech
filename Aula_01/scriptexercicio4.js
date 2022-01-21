var prompt = require('prompt-sync')();

let dias = +prompt("Quantos dias você tem de vida? ");

let ano = Math.floor (dias / 365)
let mes = Math.floor ((dias % 365) / 30);
let dia = ((dias % 365) % 30);

console.log(`Você tem ${ano}, anos de vida, ${mes} meses e ${dia} dias de vida.`);