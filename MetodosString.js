let cadena="hola";
console.log(cadena.length)
console.log(cadena.toUpperCase())
console.log(cadena.toLocaleLowerCase())
let cadenaConEspacios="hola jefferson      ";
console.log(cadenaConEspacios.trim())//corta los espacios
let FraseMascotas="Perros Gatos Homeros";
let array=FraseMascotas.split(" ");
console.log(array)//split crea un array se le pasa al contructor la opcion de validaciones como que quiere q se separae por
// " " -->espacios , "," --->comas ,":" ---->dos puntos pero crea un nuevo array 
let frutas="me gustan las sandias,peras,manzanas"
let arrayfrutas=frutas.split(",");
console.log(arrayfrutas);
//include para ver si existe algo 
//filter filtra todo los q devuelvan true 
console.log(frutas.includes("me"));
// VAMOS AVE ALGO IMPORTANTES UNE LOS ARRAYS EN JOINS 
let descripcion=["la","laptop","esta","defectuosa"];
let directo=descripcion.join(" ");
console.log(directo); //el join se le aplica a un array y al contructor se le dice como quiere que lo sepranen 
//sustarer una cadena
let nombre="jefferson";
let parte1=nombre.substring(0,3);
console.log(parte1)
let cedula="1754987566";
let parte2=cedula.substring(0,3);
let con=parte1+parte2;
console.log(con);
///para repetir codigo o palabras 
let astediscos="***-****";
console.log(astediscos.repeat(7))
//remplazar datos 
let numeroecuador="+593 959186832";
console.log(numeroecuador.replace("+593","0"))//sustituimos amigo 
//path 
let path="imagen.png";
let extension=path.split(".");
console.log(extension[1])
