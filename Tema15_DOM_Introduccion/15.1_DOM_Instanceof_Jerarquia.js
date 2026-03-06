console.log(document.body instanceof Node); // true
console.log(document.body instanceof Element); // true
console.log(document.body instanceof HTMLElement); // true
console.log(document.body instanceof String); // false //aqui dice documento es hijo de string 
/*
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Imprimir Asteriscos</title>
</head>
<body>

    <h1>Imprimir Asteriscos en la Página</h1>
    <div id="asteriscos"></div> <!-- Aquí se mostrarán los asteriscos -->

    <script src="instanceof.js"></script> <!-- Vinculamos el archivo JS -->
</body>
</html>
Object
└── Node (clase base para todos los nodos del DOM)
     ├── Document (representa el documento completo)
     │    ├── HTMLDocument (documento HTML específico, ej. <html>)
     │    └── XMLDocument (documento XML, menos común en web moderna)
     ├── Element (representa elementos genéricos)
     │    ├── HTMLElement (elementos HTML)
     │    │    ├── HTMLAnchorElement (<a>)
     │    │    ├── HTMLButtonElement (<button>)
     │    │    ├── HTMLDivElement (<div>)
     │    │    ├── HTMLFormElement (<form>)
     │    │    ├── HTMLHeadingElement (<h1>, <h2>, <h3>, <h4>, <h5>, <h6>)
     │    │    ├── HTMLImageElement (<img>)
     │    │    ├── HTMLInputElement (<input>)
     │    │    ├── HTMLParagraphElement (<p>)
     │    │    ├── HTMLSpanElement (<span>)
     │    │    ├── HTMLTableElement (<table>)
     │    │    └── ... (muchos otros elementos HTML)
     │    └── SVGElement (elementos SVG, ej. <svg>, <circle>)
     ├── Text (nodos de texto dentro de elementos)
     ├── Comment (nodos de comentarios, ej. <!-- comentario -->)
     ├── DocumentFragment (fragmento de documento, usado para manipulaciones)
     ├── DocumentType (nodo DOCTYPE, ej. <!DOCTYPE html>)
     ├── Attr (atributos de elementos, ej. id="valor")
     └── ProcessingInstruction (instrucciones de procesamiento, raro en HTML)







*/
const explorarDiferencias = () => {
    console.log("Es Node?", document.body instanceof Node);
    console.log("Es Element?", document.body instanceof Element);
    console.log("Es HTMLElement?", document.body instanceof HTMLElement);
    console.log("Node type:", document.body.nodeType);
    console.log("Tag name:", document.body.tagName);
    console.log(document.querySelector("svg") instanceof SVGElement); // true
};
explorarDiferencias();

/*

true
instanceof.js:2 true
instanceof.js:3 true
instanceof.js:4 false
instanceof.js:56 [object HTMLDocument]El jefe don
instanceof.js:57 [object HTMLBodyElement]Cuerpo DOM
instanceof.js:58 [object NodeList]Hijos del cuerpo



*/
console.log(document.querySelector("svg") instanceof SVGElement); // true