console.log(document.querySelector("h1"));
let hola=document.querySelector("h1");
console.log(hola instanceof Element) //sistaxis variable + instanceof--->saber si tiene un hijo o relacion + la clase 
console.log(hola instanceof HTMLHeadingElement)
console.log(hola.tagName)//imprime el tipo de atributo de html 

let astediscos=document.getElementById("asteriscos");
if(astediscos instanceof HTMLDivElement){
    astediscos.innerHTML = "¡Asteriscos aquí!";
}
/*
esta bien ?Object

└── Node (clase base para todos los nodos del DOM)

     ├── Document (representa el documento completo)

     │    ├── HTMLDocument (documento HTML específico, ej. <html>)

     │    └── XMLDocument (documento XML, menos común en web moderna)

     ├── Element (representa elementos genéricos)

     │    ├── HTMLElement (elementos HTML)

     │    │    ├── HTMLAnchorElement (<a>)

     │    │    ├── HTMLButtonElement (<button>)

     │    │    ├── HTMLDivElement (<div>)

     │    │    ├── HTMLFormElement (<form>)

     │    │    ├── HTMLHeadingElement (<h1>, <h2>, <h3>, <h4>, <h5>, <h6>)

     │    │    ├── HTMLImageElement (<img>)

     │    │    ├── HTMLInputElement (<input>)

     │    │    ├── HTMLParagraphElement (<p>)

     │    │    ├── HTMLSpanElement (<span>)

     │    │    ├── HTMLTableElement (<table>)

     │    │    └── ... (muchos otros elementos HTML)

     │    └── SVGElement (elementos SVG, ej. <svg>, <circle>)

     ├── Text (nodos de texto dentro de elementos)

     ├── Comment (nodos de comentarios, ej. <!-- comentario -->)

     ├── DocumentFragment (fragmento de documento, usado para manipulaciones)

     ├── DocumentType (nodo DOCTYPE, ej. <!DOCTYPE html>)

     ├── Attr (atributos de elementos, ej. id="valor")

     └── ProcessingInstruction (instrucciones de procesamiento, raro en HTML)


*/

//Propiedades Comunes en html Element 
//Vamos con Inner Html
let a=document.body.innerHTML="<H1>HOLA MUNDO</H1>";    
//let b=document.body.textContent="hola a todos desde el text content"; 
document.body.id="se cambio el id";
document.body.className="cambie esta clase";
document.body.style.color="Red";
console.log(document.body.style.color); //
console.log(document.body.parentNode)



//metodos getatribute 
let extension = document.getElementById("ida");
let nombre = extension ? extension.getAttribute("href") : "No se encontró el elemento o el atributo";
console.log(nombre);
console.log(document.body.getAttribute("id")); // "cuerpo" (si lo tiene)
//set
document.body.setAttribute("data-info", "123");
console.log(document.body.getAttribute("data-info")); // "123"
//agregar yun ele,mento html 
let nuevoP = document.createElement("p"); // Crea un <p>
nuevoP.textContent = "Soy nuevo";
document.body.appendChild(nuevoP); // Lo añade al body
//
document.body.addEventListener("click", () => {
    console.log("¡Clic en el body!");
});
//
let miFuncion = () => alert("Clic");
document.body.addEventListener("click", miFuncion);
document.body.removeEventListener("click", miFuncion); // Lo quita
document.body.click(); // Dispara el evento click