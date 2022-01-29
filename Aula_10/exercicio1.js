/*crie uma lista que o usuario armazene quantos itens no estoque e sua validade ele quiser e 
depois mostre os vencidos que sao anteriores ao ano escolhido.*/

const prompt = require('prompt-sync')();
const valiMax = +prompt('Digite o ano maximo de validade: ');
const items = [];
const itemsVencidos = [];
const validades = [];
const vencidos = [];
let resposta = '';
const exibir = [];


while(resposta!='S'){
    items.push(prompt('Digite o item: '));
    validades.push(prompt('Digite a validade usando seu ANO de fabricação: '));
    resposta=prompt('Deseja parar? [S] ou [N]: ').toUpperCase(); 
}
for (let i = 0; i < validades.length; i++) {
    if (validades[i] < valiMax ) {
        vencidos.push(i);
        itemsVencidos.push(items[i]);        
    }
}

console.log(`Os items vencidos sao ${itemsVencidos}`);


