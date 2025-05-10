let num =5;
do{
    num--;
    console.log(num)
    
}while(num>1)
//le sumo uno para q no  me de el valor cero y le mulñtiplico por 5 para q me de solo 5 valores osea del 1 al 5 y el math floor sirve para dar
//un valor entero 
console.log(Math.floor((Math.random()*5)+1))



let resultado = function () {
    let n1 = Math.floor((Math.random() * 5) + 1);
    let n2 = Math.floor((Math.random() * 5) + 1);
    let suma = n1 + n2;
    console.log(`Intento con ${n1} + ${n2} = ${suma}`);
    
    return (suma === 10) ? suma : resultado();
};

console.log("Resultado final: " + resultado());
