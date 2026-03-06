/**
 * Ejercicio: Biblioteca de Libros
Enunciado:

Pide al usuario el título de un libro con prompt.
Crea una clase Libro con:
Propiedades:
titulo (del prompt).
paginas (valor inicial fijo, ej. 100).
leido (valor inicial false).
Métodos:
leer(): Cambia leido a true e imprime: "[titulo] ha sido leído".
describir(): Imprime: "El libro [titulo] tiene [paginas] páginas y [estado]", donde estado es "leído" o "no leído" (usa un ternario).
Crea dos instancias:
Una con el título del usuario.
Otra con un título fijo (ej. "El Quijote").
Llama a leer() en la primera instancia y describir() en ambas.
Usa un alert para mostrar: "Tu libro [titulo] tiene [paginas] páginas".
 
 */

class Libro
{


constructor(titulo){
    this.titulo=titulo;
    this.paginas=10;
    this.leido=true;
}
MostrarDatos(){
    this.leido=this.leido===false?"falta leer ":"leido ";
    this.paginas=this.paginas>=10?"pocas hojas ":"muchas hojas ";
    console.log(this.leido+this.paginas+this.titulo)
}
}
let nombre=prompt("Ingresa e nombre del libro");
let li=new Libro(nombre);
li.MostrarDatos()