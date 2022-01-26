var prompt = require('prompt-sync')();

const listNum = [];

let cont = 0;
let n = 0;

while (cont < 100) {
    listNum.push(Math.floor(Math.random() * 6)+1);
    cont++;
}
console.log(listNum);
cont = 0;
for (cont = 0; cont < 100 ; cont++) {
    if(listNum[cont] == listNum[cont]) {
        n = n + 1;     
    }
}

console.log(n);