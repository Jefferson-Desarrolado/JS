/**
Ejercicio: Registro de Estudiantes
Enunciado:

Crea una clase Estudiante con:                                         
Propiedades:
nombre (del prompt).
nota (valor inicial 0).
Método no estático:
aprobar(): Cambia nota a 70 e imprime "[nombre] ha aprobado con [nota]".
Propiedad estática:
totalEstudiantes (inicia en 0, cuenta cuántos estudiantes se crean).
Método estático:
mostrarTotal(): Imprime "Total de estudiantes registrados: [totalEstudiantes]".
Pide al usuario el nombre de un estudiante con prompt.
Crea dos instancias:
Una con el nombre del usuario.
Otra con un nombre fijo (ej. "María").
Llama a aprobar() en la primera instancia.
Llama a mostrarTotal() desde la clase.
Usa un alert: "Estudiante [nombre] tiene nota [nota]".
Resultado esperado:
 *
 */
class Estudiante
{
    static numeroEstudiantes=0;
    constructor(nombre){
        this.nombre=nombre;
        Estudiante.numeroEstudiantes++;
        this.nota=0;
        
    }
    Aprobar()
    {
        this.nota=7;
        console.log("El estudiante "+this.nombre +" Aprobado "+this.nota);
    }
    static NumeroEstudiantes()
    {
        console.log(Estudiante.numeroEstudiantes)
    }
}
let es=new Estudiante("Jefferson");
es.Aprobar();
Estudiante.NumeroEstudiantes();
