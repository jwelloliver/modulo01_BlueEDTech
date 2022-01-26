var prompt = require('prompt-sync')();

const listNum = [];
let cont = 0;
while (cont < 20) {
    listNum.push(Math.floor(Math.random() * 100));
    cont++;
}
listNum.sort();


console.log(listNum);