class Numero
{
    #numero=0;
    constructor(nombre)
    {
        this.nombre=nombre;
    }
    get numero() {
        return this.#numero;
    }set numero(valor) {
        if (valor < 0) {
            console.log("No puede ser negativo");
        } else {
            this.#numero = valor;
        }
    }
}
let n=new Numero("Jefferson");
console.log(n.numero) 