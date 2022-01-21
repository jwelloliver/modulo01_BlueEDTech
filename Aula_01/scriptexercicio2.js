var prompt = require('prompt-sync')();
console.log("Escolha seu item:\n");
console.log("  1. Vestido - 96.90\n");
console.log("  2. Bermuda - 36.90\n");
console.log("  3. Saia - 28.90\n");
console.log("  4. Bolça - 15.90\n");
var item1 = +prompt( 'Qual seu item escolhido: ' );
switch (item1) {

    case item1 = 1 :
    
    console.log('Seu item escolhido: Vestido\n');
    var qnt = +prompt( 'Quantidade: ' );
    var valor = qnt * 96.90 ;
        console.log('\n valor total: %d', valor);

    break;

    case item1 = 2 :

        console.log('Seu item escolhido: Bermuda\n');
        var qnt = +prompt( 'Quantidade: ' );
        var valor = qnt * 36.90 ;
        console.log('\n valor total: %d', valor);

    break;

    case item1 = 3 :

        console.log('Seu item escolhido: Saia\n');
        var qnt = +prompt( 'Quantidade: ' );
        var valor = qnt * 28.90 ;
        console.log('\n valor total: %d', valor);

    break;

    case item1 = 4 :
        
        console.log('Seu item escolhido: Bolça\n');
        var qnt = +prompt( 'Quantidade: ' );
        var valor = qnt * 15.90 ;
        console.log('\n valor total: %d', valor);

    }
