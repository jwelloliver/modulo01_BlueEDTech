// Projeto 01
// Jornada do Heroi

// Nosso Heroi um guerreiro da idade media onde lutava contra monstros, juntos com grandes Magos
// passou por varios desafios colocando em check sua reputação de nobre guerreiro:

var prompt = require('prompt-sync')();
console.log("\nGRANDE GUERREIRO !! ")
console.log("Responda Sim ou Nao para as perguntas a seguir: \n");

// Criando uma Lista para Armazenara as Resposta sim ou nao:
var pergt = [];

// Variaveis que Armazenarão as Respostas:
var per1 = prompt("Você conseguiu encontrar a Espada Mágica da Chama da Estrela do Inverno?: ");
var per2 = prompt("Você conseguiu encontrar o Bau da feticeira?: ");
var per3 = prompt("Você Derretou o Grande Mago da luz negra que controla os monstros?: ");
var per4 = prompt("Você sabe usar canalizar energia da Pedra Enigma ?: ");
var per5 = prompt("Você passou por todos os desafios?: ");

//Variavel que Sera Armazenada a Quantidade de Resposta sim:
var rsp = 0;

// Lista esta Armazenando as Resposta do Heroi:
var pergt = [per1,per2,per3,per4,per5];

// Um estrutura de repetição que vai percorrer a lista e comparar as Resposta sim pelo indice da lista.
// a condição, a cada indice igual a sim, ele ira armazenar fazendo a contagem da quantidade de resposta, na variavel "rsp":
for (var i = 0 ; i <= 5 ; i++) {
    if (pergt[i] == ['sim']) {
        var rsp = rsp + 1;    
    }
}
// De acordo com a Quantidade de sim ira imprimir na tela a condição que se encaixa:
if (rsp == 0) {
    console.log("\nVocê falha miseravelmente.")    
} else if (rsp == 1 || rsp == 2) {
    console.log("\nVocê falha, mas ainda consegue fugir da situação.")
} else if (rsp == 3){
    console.log("\nVocê chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.")
}else if (rsp == 4){
    console.log("\nDepois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.")
}else if (rsp == 5){
    console.log("\nVocê triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.")
}

