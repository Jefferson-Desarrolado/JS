let Persona=
{
    nombre:"Jefferson"
    ,
    Edad:15
    ,
    Soltero:true


}
//se pueden crear clases anonimas para q solo ayuden en un momento dado 

console.log(Persona.Edad)
Persona.Edad=21;
console.log(Persona);
console.log("****************************************************agregar")
//asi agregamos una propiedad a una clase 

Persona.Peso=2.24;

console.log(Persona)
//asi vamos a eliminar una propiedad
//agregar
console.log("****************************************************Eliminar")
Persona.Fecha=2002;
console.log(Persona)
delete Persona.Fecha;
console.log(Persona)


console.log("***********************************************Crear Funciones En un objeto Anonimo***************************************************")

let Perro={
    Apodo:"Valto",
    Dueño:"Jefferson",
    Sonido:function(){console.log("soy un perro");}
}
Perro.Sonido()

let Gato={
    Dueño:"Micaela",
    Edad:2,
    Soni:()=>console.log("soy un gato")
}

Gato.Soni()

let Operacion={
    Nombre:"Suma",
    Sumar:(a,b)=>console.log(a+b)
}
Operacion.Sumar(1,2)

let sujeto={
    nombre:"Jefferson"
    ,
    Profesion:"Desarrolador",
    Edad:23,
    Saludar:function(){console.log("hola mi nombre es "+ this.nombre +" Y soy Un "+ this.Profesion )}
}
sujeto.Saludar();