let numero=4;
do{
    
    console.log("hola me ejecuto aun que no cumpla la condicion"+numero)
}while(numero<3)

//aqui no se ejecuta por que solo wl while no puede hacer eso necesita de un do
let num2=5;
while(num2>6){
    console.log(num2);
}
let num;
do{
    num=prompt("Ingresa un numero");
    num=Number(num);
}while(num>0);
//aqui le decimos haz do mientras while numero se ha mayor 0  osea q se ha un bucle mientras se ha mayor 