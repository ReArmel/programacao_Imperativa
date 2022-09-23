let adicionar = require('./modulos/aluno')

 
let aluno = {
    alunos : new adicionar("Marcos", 2, [1,8,4,10])    ,    
        
    
    calcularMedia : function(alunos){
        let somaMedia = 0
        for (let i = 0; i < this.alunos.notas.length; i++) {
            somaMedia += this.alunos.notas[i]
            
        }
        let media = somaMedia / this.alunos.notas.length
        return media ;
    },

    faltas : function(alunos){
        return this.alunos.faltas + 1
        
    }

}




//Calcular media:
console.log(aluno.calcularMedia(aluno.alunos))

//falta a um aluno:
console.log(aluno.faltas(aluno.alunos))

