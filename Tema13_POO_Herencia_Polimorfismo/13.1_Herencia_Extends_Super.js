class Padre 
{
    constructor(nombrePadre){
        this.nombrePadre=nombrePadre;
        
    }
    Mostrar()
    {
        console.log("soy Padre y me llamo : "+this.nombrePadre)
    }
}
class Hija extends Padre
{
    constructor(nombreHija,nombrePadre)
    {
        super(nombrePadre);
        this.nombreHija=nombreHija;
    }
    Mostrar()
    {
        console.log("soy Hija de  : "+this.nombrePadre +" y mi nombre es : "+this.nombreHija)
    }

}
let h=new Hija("Micaela","Tarquino");
h.Mostrar()