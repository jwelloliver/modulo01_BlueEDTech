/* Utilizando os conceitos aprendidos até objetos, crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.

O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande */

var prompt = require('prompt-sync')();

// Inicio do Jogo
console.log("### Jogo do Dados ###\n")

let rodadas = +prompt("quantas Rodadas você que fazer?: ");

let numeroJogadores = +prompt("\nQuantos Jogadores vão jogar?: ");
let cont = 0;
let numero1 = 0;
let nome1 = '';
let = jogarDado = '';
const listaJogadores = [];
const dados = ['1','2','3','4','5','6'];

function jogador(nome,numero) {
    this.nome = nome;
    this.numero = numero;
}
 
    while (cont < rodadas) {

        for (let i = 0; i < numeroJogadores; i++) {
            
            nome1 = prompt(`Digite o nome do Jogador ${i+1} :`);
            
            numero1 = dados[Math.floor(Math.random() * dados.length)];
            
            console.log(`\n O valor do dado e: ${numero1}`)
                
            const jogadores = new jogador(nome1,numero1);

            listaJogadores.push(jogadores);
            
        }


     cont++;
    }
 // Funçao ordenar objeto dentro da lista pelo valor do numero do menor para maior
 listaJogadores.sort(function(valorA,valorB){
    return valorA - valorB;
});

console.log(listaJogadores);