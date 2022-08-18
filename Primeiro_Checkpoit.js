const prato = 'pipoca, macarrao, carne, feijao, brigadeiro';
let pipoca = 10;
let macarrao = 8;
let carne = 15;
let feijao = 12;
let brigadeiro = 8;

function comida(prato, tempo){
    switch (prato, tempo){
        case prato = prato: console.log("Prato pronto, bom apetite")
        break;
        case (prato * 2): console.log("A comida queimou! " + " Prato pronto, bom apetite")
        break;
        case (prato * 3): console.log("Kabuuum! " + "Prato pronto, bom apetite!")
        break;
        case (prato != tempo): console.log("Tempo insuficiente! " + " Prato pronto, bom apetite")
        break;
        default: 
        console.log(" Prato inexistente")
    }

}
comida(pipoca, 30)