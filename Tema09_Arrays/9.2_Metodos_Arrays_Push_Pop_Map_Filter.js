let frutas=["manzana","pera","sandia"];
console.log(frutas[0])
console.log(frutas)


let vacio=new Array(5);
console.log(vacio)

let mixto=new Array(1,"uno",false);
console.log(mixto); 


let numros=new Array(1,2);
numros.push(5)
numros.push(4)
console.log(numros)//push agrega al final 


let vocales=new Array("b","c");
vocales.unshift("a");
console.log(vocales)//unshift agrega al inicio 


let dias=new Array("lunes","martes","miercoles","jueves","viernes");
let ultimo=dias.pop()
console.log(dias);
console.log(ultimo); //la propiedad prop elimina el ultimo elemento de un array


console.log(".......................................................................")

let puestos=new Array("primeor","segundo","tercero");
console.log(puestos);
let primer=puestos.shift()
console.log(puestos);
console.log(primer)
puestos[0]="Second"
console.log(puestos)


console.log("..................................Duplicar unh array.....................................")
let nums=new Array(1,2,3,4,5);

let pares=nums.map(m=>m%2===0);
console.log(pares);

let doblre=nums.map(m=>m*m)
console.log(doblre)

//push----- agrega al ultimo un elemnto 
//shift -----agrega al primer un elemtno indice 0 
//pop -------elimina al ultimo 
//unshit -------elimina al primero 
//map ---------modifica todos los elemntos de un arrays

console.log("..................................Filtrar Por True O False.....................................");
let Edades=new Array(18,51,21,12,12,25,65);
let mayores=Edades.filter(m=>m>=18 && m<=50) //filter devuele true a los q cumplen peor no muestra so bool si no su contenido 
console.log(mayores)

console.log("..................................parametros de filter son tres.....................................");
for(i=0;i<=2;i++){
    
    for(j=0;j<=2;j++){
        console.log("*")
    }
    console.log("\n")
}
console.log("Con foreach")
Edades.forEach(m=>console.log(m));
let sum=Edades.reduce((con,valor)=>con+valor)
console.log(sum)
