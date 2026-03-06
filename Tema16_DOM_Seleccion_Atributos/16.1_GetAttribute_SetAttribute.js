// Obtener el elemento por su id
let enlace = document.getElementById("enlace");

// Obtener atributos con getAttribute
let hrefValue = enlace.getAttribute("href");
let dataInfoValue = enlace.getAttribute("data-info");

// Mostrar en consola
console.log("Valor de href:", hrefValue);
console.log("Valor de data-info:", dataInfoValue);

// Mostrar en la página
let resultado = document.getElementById("resultado");
resultado.textContent = "href: " + hrefValue + " | data-info: " + dataInfoValue;