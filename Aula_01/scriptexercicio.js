var prompt = require('prompt-sync')();

var a = +prompt('Nota A: ');
var b = +prompt('Nota B: ');

var media = (((a*4)+(b*6))/10);
console.log('sua media e: %d',media);
