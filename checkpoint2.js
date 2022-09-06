var z =0;
for(var i=20; i<50; i+=10){
    z+=i;}
    console.log(z);

    let valor=5;
    let fatorial=1;
    for (let i = valor; i > 1; i--) {
        fatorial *=i;}
        console.log("Fatorial = "+fatorial);

    let frutasAmarelas=['Melão', 'Mamão', 'Limão'];
    let [fruta1, fruta2, fruta3]=frutasAmarelas;

    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
    console.log(frutasAmarelas);

    let x =5;
    let y = x++ + ++x;
    console.log("y= "+y);
    x=3;
    y=x*(x + 1)*x++;
    x=5;
    y=3;
    y*= x+1
    console.log("x= "+x);
    console.log("y= "+y);

    for (var i=0; i<50; i+=10){
        console.log(i);
    }
    console.log(i);