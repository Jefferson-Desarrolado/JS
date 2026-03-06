let num=Number(prompt("Ingrese el numero de frutas : "));
if(num>5)
{
    alert("Solo del 1 al 5 ")
    let num=Number(prompt("Ingrese el numero de frutas : "));
}
let i=0;
let frutas=[];
while(i<=num)
{
    let frutita=prompt("Ingrese su bruta")
    let bool=prompt("Le gusta la fruta :? si o no ");
    let frut={
        nombre:frutita,
        leGusta:Boolean(bool==="si"?true:false),
        logintud:String(this.nombre).length,
        mostrar:function()
        {
            console.log("tu frutra favorita es : "+this.nombre+" te gutsa "+this.leGusta===true?"si":"no")
        }
    }
    i++;
    frutas.push(frut);
}
for(let i of frutas){
    i.mostrar();
}