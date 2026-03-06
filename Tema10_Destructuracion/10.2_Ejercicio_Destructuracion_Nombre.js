let nombre = prompt("Ingresa tu nombre completo: primer nombre, segundo nombre, primer apellido, segundo apellido");
nombre = nombre.trim(); // Limpiar primero
let espacios = nombre.split(" ");
while (espacios.length != 4) {
    alert("Deben ser exactamente 4 partes: dos nombres y dos apellidos");
    nombre = prompt("Ingresa tu nombre completo: primer nombre, segundo nombre, primer apellido, segundo apellido");
    nombre = nombre.trim();
    espacios = nombre.split(" ");
}

let [primerNombre, segundoNombre, ...apellidos] = espacios; // Destructuración con resto
let usuario = {
    perfil: {
        primerNombre: primerNombre,
        segundoNombre: segundoNombre, // No usamos "N/A" porque exiges 4 partes
        apellidos: apellidos.join(" ") // Une con espacio
    },
    mostrarPerfil: function() {
        console.log(`Perfil: ${this.perfil.primerNombre} ${this.perfil.segundoNombre} ${this.perfil.apellidos}`);
    }
};

usuario.mostrarPerfil();
let { primerNombre: pNombre, segundoNombre: sNombre, apellidos: aPellidos } = usuario.perfil;
alert(`Nombre: ${pNombre}, Segundo: ${sNombre}, Apellidos: ${aPellidos}`);