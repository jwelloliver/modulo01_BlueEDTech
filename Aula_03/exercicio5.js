var prompt = require('prompt-sync')();

var a = +prompt("Digite um valor A: ");
var b = +prompt("Digite um valor B: ");
var c = +prompt("Digite um valor C: ");

var num1 = 0;
var num2 = 0;
var num3 = 0;

if (a >= b && a>=c) {
    num1 = a ;
    if ( b >=c ) {
        num2 = b ;
        num3 = c ;
    }else {
        num2 = c ;
        num3 = b ;
    }   
}
if (b >= a && b >=c ) {
    num1 = b ;
    if (a >= c) {
        num2 = a ;
        num3 = c ;     
    }else{
        num2 = c ;
        num3 = a ;
    }   
}
if (c >= a && c >= b) {
    num1 = c;
    if (a >= b) {
        num2 = a ;
        num3 = b ;
    } else {
        num2 = b ;
        num3 = a ;
    }
}
if (a == b && b == c) {
    num1 = a ;
    num2 = b ;
    num3 = c ;            
}
a = num1 ;
b = num2 ;
c = num3 ;

if (a >= (b + c)) {
    console.log('NAO FORMA TRIANGULO'); 
}else {
    if ((a ** 2) == ((b ** 2) + (c ** 2))) {
        console.log('TRIANGULO RETANGULO');        
    }
    if ((a ** 2) > ((b ** 2) + (c ** 2))) {
        console.log('TRIANGULO OBTUSANGULO');        
    }
    if ((a ** 2) < ((b ** 2) + (c ** 2))) {
        console.log('TRIANGULO ACUTANGULO');        
    }
    if ((a == b) == c) {
        console.log('TRIANGULO EQUILATERO');        
    }
    if ((a == b) != c || (b == c) != a || (a == c) != b) {
        console.log('TRIANGULO ISOSCELES');        
    }
}

