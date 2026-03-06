class cuenta{
    #saldo=1000;
    constructor(nombre)
    {
        this.nombre=nombre;
       
    }
    Depositar(cantidad){
        let valor=parseFloat(cantidad);
        this.#saldo+=valor;
        console.log("Deposito Exitosamente : "+this.#saldo)

    }
    Retirar(valor){
        if(valor>this.#saldo)
        {
            console.log("Saldo insuficiente"+this.#saldo)
        }else{
            this.#saldo-=valor;
            console.log("Retiro con exito +"+this.#saldo)
        }
        

    }
    Consultar()
    {
        console.log("tu saldo es de : "+this.#saldo)
    }


}
let nombre=prompt("Ingresa tu nombre : ")
let b=new cuenta(nombre);

