const prompt = require ('prompt-sync')();


var today = new Date();
var day = today.getDate();
//var month = (today.getMonth()+1)
var year = today.getFullYear();

let dia = +prompt ('Digite o dia do seu aniversário: ');
let mes = +prompt ('Digite o mes do seu aniversário: ');
let ano = +prompt ('Digite o ano do seu aniversário: ');

let a = ((year - 1 - ano) * 365); 
let b = ((13 - mes) * 30);
let c = (day - dia);
let total = (a + b + c);