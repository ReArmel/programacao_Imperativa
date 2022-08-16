//------------------ Exercício 1 ------------------------------//
//!true = false
//!false = true
//!!false true = erro
//!!true = true
//!1 = false
//!!1 = true     (0 false e 1 true, sendo assim a negação da negação de 1 é true)
//!0 = true
//!!0= false     (0 false e 1 true, sendo assim a negação da negação de 0 é false)
//!!"" = false   (uma string vazia é false, a negação da negação continua sendo false)
//let x = 5 ;
//let y = 9;
//x < 10 && x!==5    false 
//x>9 || x===5       true
//!(x===y)           true

//--------------------- Exercício 2 ------------------------------------//
//let x=10
//let y ="a"
//y==="b" || x >= 10      true (como é utilizado o || (OR) uma das operações sendo verdadeiras retorna true)

//let x=3
//let y=8
//!(x == "3" || x === y) && !(y !== 8 && x <= y)       false

//let str = ""
//let msg = "haha!"
//let eBonito = "false"
//!((str || msg) && eBonito)            false
