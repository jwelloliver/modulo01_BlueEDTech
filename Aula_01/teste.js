// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;        // retorna verdadeiro
3 in arvores;        // retorna verdadeiro
6 in arvores;        // retorna falso
"cedro" in arvores;  // retorna falso (você deve especificar o número do índice,
                     // não o valor naquele índice)
"length" in arvores; // retorna verdadeiro (length é uma propriedade de Array)

// Objetos predefinidos
"PI" in Math;            // retorna verdadeiro
var minhaString = new String("coral");
"length" in minhaString; // retorna verdadeiro

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;  // retorna verdadeiro
"modelo" in meucarro; // retorna verdadeiro
