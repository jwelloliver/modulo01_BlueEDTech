const prompt = require('prompt-sync')();

let linhas = +prompt("Digite Numero de Linhas: ");
let colunas = +prompt("digite numero de Colunas: ");
var newlista = [];
var matriz = [];

for (var i = 0; i < linhas; i++ ) {
        matriz.push(i);
        for(var i =0; i < colunas; i++){
            matriz.push(i);
        }
    
}

console.table(matriz);