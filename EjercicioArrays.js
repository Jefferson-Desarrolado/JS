let numeros=new Array(5, 12, 8, 15, 3);
let validar=numeros.filter(m=>m>=10)
console.log(validar)

const Separar=()=>{
    let con="";
    for(i=0;i<=180;i++){
        con+="*";
    }
    console.log(con)
}
Separar();

let palabras=new Array("gato", "perro", "casa", "sol");
let a=palabras.filter(m=>m.includes("a"))
console.log(a)
Separar();

let servicios=new Array("luz", "rio", "cielo", "mar");
let palabrasconR=servicios.filter(m=>m.length>3);
console.log(palabrasconR)
Separar();
let personas=new Array("Jefferson","ana","Elena","Jhon");
console.log(personas.filter(m=>m.includes("J")));
Separar()
console.log(" \t\t\t\t\t\t LERR CON FOR")
Separar();
//separar con for simple
let frutas=new Array("manzana","pera","sandia","melon");
for(i=0;i<=frutas.length;i++){
    console.log(frutas[i]+" Frutas " +(i+1));
}
Separar();
//con for of nombre del arrays
for(let i of frutas){
    console.log(i)
}

Separar();
let dias = ["lunes", "martes", "miércoles"];
for (let i in dias) {
    console.log(`Índice ${i}: ${dias[i]}`);
}
// Resultado:
// Índice 0: lunes
// Índice 1: martes
// Índice 2: miércoles
///////////////////////////EJERCICIO INVERSO//////////////
Separar();
console.log("\t\t\t\t\t\t\t\t\t\t\t\tInverso")
let dia = ["lunes", "martes", "miércoles"];
for(i=dia.length-1;i>=0;i--){
    console.log(dia[i])
}