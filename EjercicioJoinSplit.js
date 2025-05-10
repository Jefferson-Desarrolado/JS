let frase=prompt("Ingresa una frase");
frase.trim();
while(frase.length<=10 || frase.includes(".")!=1){
    alert("tienen q ser superior a 10 caracteres ");
    frase=prompt("Ingresa una frase");
    frase.trim();
}
let dividir=frase.split(".");
alert(dividir);
console.log(dividir)    
let unir=dividir.join("hola estoy de metido xd ");
alert(unir)