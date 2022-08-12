function mensagem( nome, idade) {
    console.log("Eu sou a " +nome+ " e tenho " +idade+ " anos");
}
mensagem("Renata", 37);

Math.random()
console.log( Math.random() );

function cumprimentar(name) {
    name = "Marcelo";
    console.log("Olá, seja muito bem vindo " + name);
   }
   cumprimentar();


   function cumprimentarA(nome) {
    const mensagem = "Olá, seja bem vindo "
    console.log(mensagem + nome);
   }
   
   cumprimentarA("William");
   cumprimentarA("Danilo");

//Funções que retornam valor

function multiplicarPorDoisESomarCinco(x) {
    return 2 * x + 5
   }
   multiplicarPorDoisESomarCinco(1);
   multiplicarPorDoisESomarCinco(5);
   const erick=5;
   multiplicarPorDoisESomarCinco(erick);

   const valor= multiplicarPorDoisESomarCinco(erick);
   console.log(valor);

   //Microdesafio 1

   function somar (x, y){
    return x+y;
}
console.log (somar(30, 53));

//Microdesafio 2

function converter(pol){
    return pol*2.54;
    }
    console.log("O valor em centimetros é: " + converter(60));
    
    // Função para converter em URL:
    
    function url(dominio){
        return "www."+dominio+".com.br"
    
    }
    console.log(url("itau"));
    
    //função que recebe uma string e retorna a mesma frase.
    
    function copiar(frase){
        return frase+"!";
    }
    console.log(copiar("Hoje é um belo dia para aprender!"));
    
    // Calcular idade dos cachorros:
    
    function idadeCachorro(idadeHumana){
        return idadeHumana*7;
    }
    console.log("O seu cachorro tem "+idadeCachorro(5) + " anos");
    
    // Calcular hora de Trabalho
    
    function hora(salario){
    return salario/160;
    }
    console.log("Sua hora de trabalho vale: "+ hora(3300));
    
    //Calcular IMC
    
    function imc(peso, altura){
        return peso/(altura*altura);
    }
    console.log("O seu IMC é: " + imc(84, 1.69));
    
    //Função que recebe uma string em minúsculas, converta-a em maiúsculas e as retorne;
    
    
        let text = "Que frio no MS";
        let result = text.toUpperCase();
        console.log(result);
    
        //Função que recebe um parâmetro e retorne o tipo de dado deste parâmetro
    
        function parametro(valor){
            return typeof valor;
        }
        console.log("Este tipo de dado é um: "+parametro(23));
        console.log("Este tipo de dado é um: "+parametro("Celular"));
    
        // função pela qual passamos o raio de um círculo e ela retorna a circunferência:
    
        function raio(medida){
            return 2*Math.PI*medida;
        }
    
        console.log("A circunferencia do circulo a partir do raio é "+ raio(56));

        //FIM! :)