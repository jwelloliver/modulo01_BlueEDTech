var prompt = require('prompt-sync')();

var nt1 = +prompt("Digite sua primeira nota: ");
var nt2 = +prompt("Digite sua segunda nota: ");
var nt3 = +prompt("Digite sua terceira nota:  ");
var nt4 = +prompt("Digite sua quarta nota:  ");

var media = ((nt1+nt2+nt3+nt4)/4);

if (media >= 7){
    console.log('Sua media e %d , parabens você foi Aprovado!', media);
    } else if (media >= 5 && media <= 7 ) {
        console.log('Sua media e %d , Em recuperação', media);        
    } else if(media < 5){
        console.log('Sua media e %d , você foi Reprovado!', media);
    }

