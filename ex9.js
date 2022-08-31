function podeSubir(altura, vemAcompanhado){
    let podeSubir = false;

    if(altura <= 2.00 && altura >= 1.40){
        podeSubir = true;
    }
    
    else if((altura <= 1.40 && altura >= 1.20)  && vemAcompanhado){
        podeSubir = true;   
    }

    else if(altura <= 1.20){
        podeSubir = false;  
    }
        return podeSubir;
}
    console.log(podeSubir(1.50, "Acompanhado"));

    // agora exercicio modifique a função podeSubir(), de modo que ela exiba uma mensagem de autorização ou de impedimento no acesso ao brinquedo dependendo se a pessoa se enquadra ou não nas condições do exercício anterior.//
    

    function podeSubir1(altura, vemAcompanhado){
        let podeSubir1 = false;
    
        if(altura <= 2.00 && altura >= 1.40){
            podeSubir1 = true;
            console.log('Acesso autorizado!');
        }
        
        else if((altura <= 1.40 && altura >= 1.20) && vemAcompanhado){
            podeSubir1 = true;  
            console.log('Acesso autorizado com acompanhante!');
        }
    
        else if(altura <= 1.20){
            podeSubir1 = false;  
            console.log('Acesso negado!');
        }
           
    }
        podeSubir1(1.30, "Acompanhado");
