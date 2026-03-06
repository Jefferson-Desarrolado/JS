const FuncionFactorial=(num1)=>{
    let acumulador=1;
    let incide=1;
    while(incide<=num1){
        acumulador=acumulador*incide;
        incide++;
    }
    console.log(acumulador);
};


FuncionFactorial(4);


const VerificarSiEsPar=(num2)=>{
    let verfificar=num2%2===0?console.log(true):console.log(false);
}
VerificarSiEsPar(2);

const FactorialDeSuma=(n1)=>{
    let acu=0;
   
    for(i=0;i<=n1;i++){
        acu=acu+i;

    }
    console.log(acu);
}
FactorialDeSuma(5);