const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (a, b) {
let pontosPrimeiroParticipante = 0;
let pontosSegundoParticipante = 0;
for(posicao = 0; posicao < alicia.length; posicao++){
    if(a[posicao] > b[posicao]){
        pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1
    }else if(a[posicao] < b[posicao]){
        pontosSegundoParticipante = pontosSegundoParticipante + 1
    }else if(a[posicao] == b[posicao]){
pontosPrimeiroParticipante;
pontosSegundoParticipante;
    }
}
let ganhador;
if(pontosPrimeiroParticipante > pontosSegundoParticipante){
    ganhador = 'alicia';
}else{
    ganhador = 'bob';
}
return ganhador
}
console.log("O ganhador é: "+ encontrarGanhador(alicia, bob));
