const nome = "Aline"; 
const sobrenome = "Ferreira"; 
let idade = 33; 
let peso = 63.7; 
let altura = 1.53; 
let plano = false; // Neste caso, pode-se atribuir ao plano o Null
let imc = peso / Math.pow(altura,2); 

console.log(nome + " " + sobrenome + " tem " + idade + " anos, e seu índice de massa corporal é de " + imc);

