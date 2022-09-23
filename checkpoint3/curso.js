var lista = require('./modulos/listaestudantes')
var adicionar = require('./modulos/aluno')


const curso = {
    nomeCurso : "FrontEnd", 
    notaAprovacao : 6,
    faltas_maximas : 5, 
    listaEstudantes : lista,

    adicionar_aluno: function(aluno, faltas, notas){
        lista.push(new adicionar(aluno, faltas, notas))
    },

    aprovacao : function(array){
        let somaNota = 0
        for (let i = 0; i < array.notas.length; i++) {
           somaNota += array.notas[i]            
        }
           let media = somaNota / array.notas.length
           if ((media >= curso.notaAprovacao) && ((array.faltas < this.faltas_maximas))){
            return true
           }else if( (media >= curso.notaAprovacao) && ((array.faltas == this.faltas_maximas) && (media > (curso.notaAprovacao + (curso.notaAprovacao * 0,1))))) {
            return true
           }else{
            return false
           }
        },
        aprovacaoClasse: function(array){
            let aprovados = [];
            for (let index = 0; index < array.length; index++) {
                aprovados.push(this.aprovacao(array[index]))     
            }
            return aprovados;
        }
}



//Adicionar estudante:
curso.adicionar_aluno("Jose", 4, [10,8,4,9])

//estudante aprovado:
console.log(curso.aprovacao(curso.listaEstudantes[1]))

//Array da aprovação:
console.log(curso.aprovacaoClasse(curso.listaEstudantes))