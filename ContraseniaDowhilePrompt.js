let contadorPares=0;
let contadorImPares=0;
let opcion;
do{
    opcion=Number(prompt("Ingrese un numero : "));
    if(opcion!=0){
        if(opcion%2===0){
            contadorPares++;
    
        }else{
            contadorImPares++;
        }
    }
    alert("Aplasta Cero para Salir");

}while(opcion !==0);//mientra no se ha 0 no salgas eso dice 
alert("numeros pares : "+contadorPares+ " Numeros Impares : "+contadorImPares);