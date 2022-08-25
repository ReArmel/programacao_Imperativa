let nomes = ['Renata', 'Marina', 'Fernanda', 'Aline'];
console.log(nomes.length);
nomes[0] = '0 - ' + nomes[0];
nomes[1] = '1 - ' + nomes[1];
nomes[2] = '2 - ' + nomes[2];
nomes[3] = '3 - ' + nomes[3];
console.log(nomes);
console.log(nomes[2]);

//Modificando os elementos do array
console.log(nomes[0] + " está amando estudar programação");
console.log(nomes[1] + " tem 20 anos");
console.log(nomes[2] + " tem um cachorro");
console.log(nomes[3] + " é professora");

// Acrescentando um nome ao final do array
nomes.push('Julia');
console.log(nomes);

//Acrescenta uma informação no começo do array
nomes.unshift('Karen');
console.log(nomes);

//Remove uma informação no começo do array
nomes.shift();
console.log(nomes);

//Remove uma informação no final do array
nomes.pop();
console.log(nomes);

let nomes1 = ['Isabel', 'Letícia'];
//comparar os elementos de dois arrays
console.log(nomes == nomes1)
console.log(nomes[0] != nomes1[0]);

// O que esses códigos retornam?

// 1) Undefined devido a erro de sintaxe;

// 2) Spiderman

//3) Uma string qualquer

//---------- Array Invertido------- 
//Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
function imprimirInverso() {
    console.log(nomes[3]);
    console.log(nomes[2]);
    console.log(nomes[1]);
    console.log(nomes[0]);
}
imprimirInverso()

//Crie a função inverter que recebe um Array como argumento e retorna um novo invertido
function inverter() {
    console.log(nomes = ['Aline', 'Fernanda', 'Marina', 'Renata']);
}
inverter()

//Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
function somarArray([a, b, c]) {
    let numb = [a + b + c];
    console.log(numb);
}
somarArray([4, 8, 12]);

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().
function join([a, b, c, d,]) {
    let j = ["" + a + b + c + d + ""];
    console.log(j);
}
join(["H", "O", "P", "E"]);

//O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para isso, devemos:
//criar a estrutura apropriada para armazenar os seguintes filmes e séries:
let filmes = ['Star Wars', 'Matrix', 'O Preço do amanhã', 'A vida é bela'];
console.log(filmes);
console.log(filmes[2]);

//Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
function maiuscula([m]) {
    console.log(filmes[m].toUpperCase());
}
maiuscula([0]);
maiuscula([1]);
maiuscula([2]);
maiuscula([3]);

//Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
let filmes1 = ['Toy Story', 'Procurando Nemo', 'Kung-fu Panda', 'Wally', 'Fortnite'];
console.log(filmes);
function f() {
    var soma = [filmes + filmes1];
    console.log(soma);
}
f();

//Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
let game = 'Fortnite';
filmes1.pop();
var soma1 = [filmes + filmes1]
console.log(soma1);

//Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.   
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparar_media() {
    for (let media1 = 0; media1 <= asiaScores.length; media1++) {
        if (asiaScores[media1] === euroScores[media1]) {
            console.log('As médias são iguais!')
        } else {
            console.log("As médias são diferentes!")
        }
    }
}
comparar_media()






