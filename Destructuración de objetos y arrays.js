/*
 *Destructuración de arrays (explicación profunda)
¿Cómo funciona?
Un array es una lista ordenada (ej. ["rojo", "azul"]).
La destructuración usa corchetes [] y asigna los elementos en orden a variables.
Sintaxis: let [var1, var2] = array;
 */ 
let frutas=["pera","manzana","piña","sandia"];//sintaxis primer arrys normal 
let [primero,segundo,,cuarto]=frutas;//estos son destructores
console.log(primero) 
let a="";
for(i=0;i<=140;i++){
    a+="*";
}
console.log(a);

primero="kiwi";
for(i in frutas){
    console.log(frutas[i])
}
for(i=0;i<=140;i++){
    a+="*";
}
console.log(a);
let datos = { nombre: "Sofia", edad: 30, pais: "Colombia" };
let { nombre, ...resto } = datos;
console.log(nombre); // "Sofia"
console.log(resto); // { edad: 30, pais: "Colombia" }
/*
¿Para qué sirve en la vida real?
Simplificar código:
En vez de:
javascript

Contraer

Ajuste

Copiar
let x = punto.x;
let y = punto.y;
Usas:
javascript

Contraer

Ajuste

Copiar
let { x, y } = punto;
Trabajar con APIs:
Si recibes datos como { id: 1, name: "Ana", age: 25 }, puedes extraer solo lo que quieres:
javascript

Contraer

Ajuste

Copiar
let { name, age } = datosAPI;
Dividir listas:
Si tienes [10, 20, 30, 40], puedes tomar el primero y el resto fácil:
javascript

Contraer

Ajuste

Copiar
let [primero, ...otros] = numeros;
Hacer código legible:
Es más claro ver let { nombre, edad } = persona que repetir persona.nombre muchas veces.


*/