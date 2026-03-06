class Animal
{
    constructor(nombre,edad)
    {
        this.nombre=nombre;
        this.edad=edad;
    }
    Moverse()
    {
        console.log("Se mueve un "+this.nombre)
    }
}
class Aver extends Animal
{
    puedoVolar=false;
    constructor(nombre,edad,puedoVolar){
        super(nombre,edad);
        this.puedoVolar=puedoVolar;
        
       
    }
    Moverse() {
        this.puedeVolar ? console.log(`${this.nombre} vuela`) : super.Moverse();
    }
    

}
let nombre=prompt("Ingrese el nombre :");
let edad=Number(prompt("ingrese la edad : "));
let puedevolar=prompt("Ingrese si puede volar si o no ");
let bool=Boolean(puedevolar==="si".toUpperCase()?true:false)
let a=new Aver(nombre,edad,bool);
alert(a.Moverse())
/* 
class Animal {
    moverse() {
        console.log(`${this.nombre} se mueve`);
    }
}
class Ave extends Animal {
    moverse() {
        this.puedeVolar ? console.log(`${this.nombre} vuela`) : super.moverse();
    }
} 

*/