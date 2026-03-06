let NumAleatorio=(Math.floor(Math.random()*10)+1)
let num1=Number(prompt("Ingrese un numero : "))
console.log(NumAleatorio)
while(num1!==NumAleatorio)
{
    if(num1<NumAleatorio)
    {
        alert("Numero muy bajo "+num1)
        num1=prompt("Ingresa un numero ")
    }else if(num1>NumAleatorio){
        alert("Numero muuy alto")
        num1=prompt("Ingresa un numero ")
    }else{
        break;
    }
}