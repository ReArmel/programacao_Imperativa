var espectador = require('./modulos/espectadores');
var object = require('./modulos/objetos');
var acrescentar = require('./modulos/opiniao');

console.log(object.mediaIdade(espectador));
console.log(object.qtdadePessoas(espectador));
console.log(object.porcentagem(espectador));

espectador.push(new acrescentar(36, 2));
console.log(espectador);

console.log(object.mediaIdade(espectador));
console.log(object.qtdadePessoas(espectador));
console.log(object.porcentagem(espectador));


