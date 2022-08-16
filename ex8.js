let linguagem = "ingles";

if(linguagem == "ingles"){
    console.log("Estou aprendendo!");
}else{
    console.log("Aprenderei mais tarde"); 
}

//Microdesafio

let status = "true";

if(status == "true"){
    console.log("O valor é true - verdadeiro");
}else {
    console.log("O valor é false - falso");
}


//If ternário
//escrito horizontalmente. É obrigatório colocar o código na segunda expressão. Se não quisermos que nada aconteça podemos usar uma string vazia ('').
let oMaior = 4 > 10 ? 'o 4 é o maior' : 'o 10 é o maior';
console.log(oMaior);

//Switch oferece uma sintaxe mais legivel para os casos que queremos avaliar muitas possibilidades de um único valor.
// o Switch é composto por um valor a ser avaliado seguido de diferentes cases. Podemos adicionar quantos quisermos, cada um contemplado um cenário diferente.
//casa case deve terminar com a palavra break para evitar que o próximo bloco seja executado.

let idade = 10;
switch(idade){
    case 20:
    console.log('tem 20 anos');
    break;
    case 10:
    console.log('tem 10 anos');
    break;
}
