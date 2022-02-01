var prompt = require('prompt-sync')();


const data = prompt("Digite uma data dd/mm/aaaa: ");

let datas = data.split("/");


dataEspecial(datas[0],datas[1],datas[2]);

function dataEspecial(dia, mes, ano) {
    const listaMesNume = ['','Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    var meses = mes.split("0");
    for (let i = 0; i < listaMesNume.length; i++) {
        if (i == mes) {
           var meses = listaMesNume[i];            
        }       
    }
    console.log(`${dia} de ${meses} de ${ano} `);
}