let nombre=prompt("ingrese el nombre del juguete ");
class Jueguete{
    nombre;
    precio=Math.floor(Math.random()*10+1)

    constructor(nombre){
        this.nombre=nombre;
        
    }
    MostrarDatos (){
        console.log("el juguete "+this.nombre+" vale : "+this.precio)
    }

}
let h=new Jueguete(nombre);
h.MostrarDatos();