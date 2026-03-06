/*
Crea un objeto libro con propiedades titulo y autor, y un método mostrar que imprima "El libro [titulo] fue escrito por [autor]".
Usa un for...of para recorrer un array de nombres y crear un objeto por cada uno con un método saludar.


*/

let libro={
    titulo:"El libro satanic",
    autor:"La vey",
    Mostrar: function() {
        console.log("El nombre del libro es "+this.titulo+" Y su gran Autor es : "+this.autor)
        
    }

}
libro.Mostrar()

/*
let personas=new Array("Jefferson","Sophia");
let person=new Array(personas.length)
for(p of personas ){
    let per={

    }
}
    Sin Resolver
    */


/*

Nuevo Ejercicio Más Complejo (Sin Resolver)
Aquí te dejo un ejercicio más desafiante para que practiques objetos, 
propiedades, métodos y bucles. No lo resuelvo, pero te doy pistas:

Enunciado:

*/
let Producto=new Array("Laptop", "Teléfono", "Tablet");
let inventario=[];
for(let p of Producto){
    let pro={
        nombre:p,
        precio:Math.random()*10,
        Describir: function(){
            console.log("Nombre Producto es : Y \n "+this.nombre +" Su Precio es : "+this.precio);

        }
    }
    inventario.push(pro);
}

// Recorrer correctamente el inventario
for (let item of inventario) {
    item.Describir();
}


/*
Ejercicio 2 
iiiiiiiiii      jjjjjjjjjjjjjjjjjjjj
i                        j
i                        j
i
iiiiiiiiii               j
i
i                        j
i
iiiiiiiiii      jjjjjjjjjj

Recordemos el enunciado:

Crea un array con 4 nombres de estudiantes (ej. "Ana", "Luis", "Sofia", "Pedro").
Usa un bucle para crear un objeto por cada estudiante con:
nombre: El nombre.
notas: Un array de 3 notas aleatorias entre 0 y 10.
promedio: Método que calcula el promedio de las notas.
estado: Método que imprime "Aprobado" (promedio >= 6) o "Reprobado".
Guarda los objetos en un array estudiantes.
Recorre estudiantes y llama a estado.
*/
let estudiante=new Array("Ana", "Luis", "Sofia", "Pedro");
let ObjetosEstudiantes=[];
for(let i of estudiante){
    let est={
        nombre:i,
        Notas:function(a,b,c){
            
            let nota=(a+b+c)/3;
            console.log("La nota del estudiante "+this.nombre+" es : "+nota)
            return nota;
        }
        ,
        estado:function (){

            let nota=this.Notas(10,10,10);
            console.log(this.nombre + " - " + (nota >= 7 ? "Aprobado" : "Reprobado")+nota);
        
        }
        

    };
    ObjetosEstudiantes.push(est);
}

for (let est of ObjetosEstudiantes) { // for...of para valores
    est.estado(); // Llamamos al método
}
/*
Ejercicio 3
iiiiiiiiii      jjjjjjjjjjjjjjjjjjjj
i                        j
i                        j
i
iiiiiiiiii               j
i
i                        j
i
iiiiiiiiii      jjjjjjjjjj

Recordemos el enunciado:
Crea un array con 4 nombres de empleados (ej. "Ana", "Carlos", "María", "Pedro").
Usa un bucle para crear un objeto por cada empleado con las siguientes propiedades y métodos:
nombre: El nombre del empleado.
tareas: Un array de 3 objetos, cada uno representando una tarea con:
descripcion: Un string (ej. "Revisar correos", "Programar función").
dificultad: Un número aleatorio entre 1 y 5.
completada: Un booleano (true o false) aleatorio.
*/
let empleados=new Array("Ana", "Carlos", "María", "Pedro");
let Objetos=[];
let tareas=("Revisar correos", "Programar función"); 
for( i in empleados)
{
    let emp=
    {
        nombreempleado:empleados[i],
        
        saludar:function(){console.log("hola "+this.nombreempleado)} ,
        calcularcarga:
        
    }
    for(let t of tareas){
        let ta={
            descripcion:t,
            dificultal: function()
            {
                let n;
                n=Math.floor(Math.random()*6);
                return n;
            },
            complet:function()
            {
                let cal=this.dificultal();
                return cal>=3?true:false;
            }

            

        }
        

    }
    Objetos.push(emp);
    
}
for(let em of Objetos ){
    em.saludar();
}