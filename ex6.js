//Calculadora

function adicionar(a, b){
    return a+b;
}
function subtrair(a, b){
    return a-b;
}
function multiplicar(a, b){
    return a*b;
}
function dividir(a, b){
    return a/b;
}

console.log (" Teste de Operações Matemáticas: ")
console.log(adicionar(20, 150));
console.log(subtrair(20, 150));
console.log(multiplicar(25, 40));
console.log(dividir(225, 0));

//Quadrado/Função

function quadradoDoNumero(x){
    return multiplicar(x, 4) * multiplicar(x, 4);
}
console.log("O quadrado do número é " + quadradoDoNumero(8));

//Média de 3 números

function mediaDeTresNumeros(a, b, c){
    return[(dividir(a, 1))+(dividir(b, 1))+(dividir(c, 1))] / 3;
}
console.log("A média dos três números é: " + mediaDeTresNumeros(20, 20, 30));

//Calcular Porcentagem
function calcularPorcentagem(a, b){
    return dividir(a, 100) * b;
}
console.log("A porcentagem é: " + calcularPorcentagem(500, 25));

// Gerador de Porcentagem

function geradorDePorcentagem(a, b){
    return multiplicar(a, 100) / b;
}
console.log("A porcentagem é: " + calcularPorcentagem(400, 40));

function geradorDePorcentagem( a, b){
    return multiplicar(a, 100) / b;
}
console.log("A porcentagem é: " + geradorDePorcentagem (40, 400));
