const espectadores = [
    {idade : 18, opiniao: 2},
    {idade : 35, opiniao: 1},
    {idade : 67, opiniao: 2},
    {idade : 25, opiniao: 2},
    {idade : 30, opiniao: 2},
    {idade : 37, opiniao: 1},
    {idade : 16, opiniao: 2},
    {idade : 24, opiniao: 3},
    {idade : 44, opiniao: 3},
    {idade : 80, opiniao: 2},
    {idade : 49, opiniao: 2},
    {idade : 20, opiniao: 1},
    {idade : 28, opiniao: 2},
    {idade : 33, opiniao: 2},
    {idade : 55, opiniao: 2}
    ]
    
    const mediaIdade = (array)=>{
        let selecao = array.filter(media => (media.opiniao == 3));
        let somaIdade = 0
        for (let i = 0; i < selecao.length; i++) {
            somaIdade += selecao[i].idade
        }
        let media = somaIdade / selecao.length
        console.log("A média das idades que responderam ótimo foi de:", Math.round(media));
    }
    mediaIdade(espectadores);
    
    
    //--------------------------------------------------
    
    
    
    const qtdPessoas = (array)=>{
        let selecao = array.filter(regular => (regular.opiniao == 1));
        console.log("A quantidade de pessoas que responderam regular foi de:", selecao.length)
    }
    
    qtdPessoas(espectadores)
    
    
    
    //--------------------------------------------------
    
    const porcentagem = (array) =>{
        let selecao = array.filter(regular => (regular.opiniao == 2));
        porcento_total = (selecao.length*100) / array.length;
        console.log("A porcentagem de espectadores que acharam o filme 'bom' foi de:", Math.round(porcento_total),"%")
    }
    porcentagem(espectadores)
    