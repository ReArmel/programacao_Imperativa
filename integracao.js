function Agricultura(nome, preco, qtdade){
  this.nome = nome;
  this.preco = preco;
  this.qtdade = qtdade;
  this.lucro = preco * qtdade;
}

let p1 = new Agricultura("algodao", 70.00, 5);
let p2 = new Agricultura("soja", 190.00, 8);
let p3 = new Agricultura("milho", 150.00, 38); 
let p4 = new Agricultura("café", 80.00, 67);
let p5 = new Agricultura("trigo", 160.00, 54);
let p6 = new Agricultura("vaca", 400.00, 120);

let produtos = [ p1, p2, p3, p4, p5, p6];
console.log(produtos);

//----------- Calcule a soma dos lucros dos produtos-------------//

function lucroProdutos(){
  let soma = 0;
  for (let index = 0; index < produtos.length; index++) {
      soma += produtos[index].lucro
  }
  return soma
}
console.log(" O lucro dos produtos foi de: " + lucroProdutos());

//-----------Escolha um produto e mostre o seu lucro ----------//

function nomeProduto(nome){
  let escolha = produtos.filter(array => (array.nome === nome));
  return escolha[0].lucro
}
console.log("O lucro do produto escolhido foi de :" + nomeProduto("trigo"));

//----------Mostre os produtos que tiveram lucro maior que o valor inserido---------//

function maioresVendas(valor){
  let vendas = produtos.filter(array => (array.lucro > valor));
  return vendas;
}
console.log(maioresVendas(6000));

//--------Classifique os produtos pela quantidade de dinheiro gerado-------------//

function classificar(){
  let qtdadeGerada = produtos.sort(function(a,b){
    if (a.lucro > b.lucro){
      return 1;
    }
    else if (a.lucro < b.lucro){
      return -1;
    }
    return 0;
  })
  return qtdadeGerada;
}
console.log(classificar());

//---------------- Encontre um produto e atribua a ele um novo valor ----------------//

function encontre(nome, valor){
  let atribuir = produtos.filter(array => (array.nome === nome));
  atribuir[0].preco = valor;
  return atribuir;
  }
  console.log("O novo valor do produto escolhido é de: ")
  console.log(encontre("milho", 230));

  //-------------- Calcule o lucro total após 45% de impostos---------------------//

  function calculo(){
    let soma = 0;
    for (let index = 0; index < produtos.length; index++) {
     soma += produtos[index].lucro;
    }
    return soma - (soma * 0.45);
 
  }
  console.log(calculo());