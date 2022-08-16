/* ========================== ATRIBUIÇÃO ========================== */

// O operador "=" serve para atribuir valor a uma variável chamada "idade"

let idade = 35
console.log("Ela tem " + idade+ " anos");

/* ========================== ARITMÉTICOS ========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1



/* ========================== COMPARAÇÃO SIMPLES ========================== */
// comparam dois valore, devolvem se é verdadeiro ou falso
12 == 17 //igualdade - False
12 != 17 //desigualdade - true


/* ========================== COMPARAÇÃO ESTRITA ========================== */
//comparam o valor e o tipo de dado
12 === "12" //igualdade - false. O valor é o mesmo, mas não o tipo de dado já que um é númerico e o outro String.
12 !== 17 //desigualdade- true


/* ========================== OPERADORES RELACIONAIS ========================== */
//comparam dois valores, devolvendo se é verdadeiro ou falso. Sempre retornarão booleano ou seja False or True.
12 > 12 //Maior que - false
12 < 12// Menor que - false
12 >= 12 // Maior ou igual - true
12 <= 17 //Menor ou igual - true


/* ========================== LÓGICOS ========================== */
//Permitem combinar valores booleanos, o resultado também retorna um booleano.
// Existem 3 operadores: && (And) , || (Or) e !(Not)
// &&- todos os valores precisam ser verdadeiros para o resultado ser verdadeiro
(12 % 4) && (12 != 4) //true (ambos os resultados)
(12 < 4) && (12 != 4) //false (um dos resultados é falso)

//||- Ao menos um valor precisa ser verdadeiro para retornar verdadeiro.
(10 > 15) || (10 !=15) //true (um dos resultados é verdadeiro)
(10 > 15) || (10 == 15) // false (nenhum valor é verdadeiro)

// !- nega a condição. Se era true vira false e vice versa.


