const fsoma = require('./modulos/soma');
const fpessoas = require('./modulos/pessoas');

console.log(fsoma(20, 40));
console.log(fpessoas);

function mediaIdade(lista) {
    let result = 0;
    for (let aux = 0; aux < lista.length;aux++){
        result +=lista[aux].idade    
    }
    return result/lista.length;
}

console.log( mediaIdade(fpessoas) );