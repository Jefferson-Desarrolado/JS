let Personas=new Array("Max", "Luna", "Rex");
let objetosPersonas=[];
for(i in Personas)
    {
        let per=
        {
            nombre:Personas[i],
            edad:(Math.floor(Math.random()*50)+1),
            saludar:function(){console.log("hola soy "+this.nombre+" tengo la edad de :"+this.edad)}
            ,
            estado:function(){console.log(this.edad >= 18 ? "Adulto" : "pequeño");}
        }
        objetosPersonas.push(per);
    }

for(let i of objetosPersonas)
{
    i.estado()
    i.saludar()
} 


let a="";
for(i=0;i<=175;i++){
    a+="*";
}
console.log(a)


let juguetes=new Array("Pelota", "Muñeca", "Carro");
let guardar=[];
for(let i of juguetes)
{
    let jug={
        nombre:i,
        precio:(Math.floor(Math.random()*20)+1),
        descripcion:function(){
            console.log("el juguete "+this.nombre+" y su precio es : "+this.precio)
        },
        esta:function(){
            console.log(this.precio<=12?"Batarato":"Costoso");
        }

    }
    guardar.push(jug);
}
for(let a of guardar){
    a.descripcion()
    a.esta();
}

let estudiantes=new Array("Ana", "Luis", "Sofia", "Pedro");
let save=[];
for(let a of estudiantes)
{
    let es={
        name:a,
        asistencias:Math.floor(Math.random() * 10) +20,
        clases:30,
        ClasesAsistidas:function()
        {
            let num=this.asistencias;
            let resultado=Math.floor((this.asistencias/this.clases)*100);
            console.log("Tu porcentaje de asistencia es : "+resultado) 
            return resultado;
        }
        ,
        evaluarasistencia:function(){
            let porcentaje=this.ClasesAsistidas();
            if(porcentaje>=90)
            {
                console.log("Alta")
            }else if(porcentaje>=50)
            {
                console.log("Media");
            }else{
                console.log("Pierde por faltas")
            }
        }

        }
        save.push(es);
}

for(let as of save)
{
    console.log(as.asistencias);
    
    as.evaluarasistencia();
}