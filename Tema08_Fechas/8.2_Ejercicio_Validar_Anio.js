let anio = Number(prompt("Ingresa tu año de nacimiento (1900-2025)"));
while (anio < 1900 || anio > 2025) {
    anio = Number(prompt("Año inválido, ingresa tu año de nacimiento (1900-2025)"));
}