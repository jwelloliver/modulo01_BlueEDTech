const pessoa = {

    nome: '',
    idade: '21',
    peso: '',
    altura: '',
    envelhecer: function(a) {
         a = a + 21;
        this.idade++;
    }
    ,engordar: function(){
        this.peso++;
    }

};
console.log(pessoa.idade);
pessoa.envelhecer();
console.log(pessoa.idade);
