let filmes = ['star wars', 'matrix', 'mr. robot', 'o preço do amanhã', 'a vida é bela'];
let filmes1 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"];

function maiuscula ([]){
    for (let modo = 0; modo<filmes.length; modo++){
        console.log(filmes[modo].toUpperCase())
    }
}
maiuscula([]);

//---------------------------------------------//
function passagemDeElemento([]){
   filmes1.pop()
for (let passagem = 0; passagem<filmes.length; passagem++){
  let soma = [filmes[passagem] + " , " + filmes1[passagem]]

  console.log(soma);

}
}
passagemDeElemento([])

//----------------------------------------------//

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];


function comparar_media(){
for (let media1 = 0; media1<=asiaScores.length; media1++){
    if (asiaScores[media1] === euroScores[media1]){
       console.log('As médias são iguais!')
    }else{
       console.log(" As médias são diferentes!")
    }

}
}
comparar_media()

// exercicio 1

for (let b = 0; b<5; b++ ){
   console.log("olá Mundo!")
}

// exercicio 2:

for (let imp = 1; imp<11; imp++){
console.log(imp++)
}

//exercicio 3

   for (let tabu = 0; tabu<11; tabu++){
       console.log("5x"+ tabu + "="+tabu * 5)

}
