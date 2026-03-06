// Clase base (como Node)
class Maquina {
    constructor(nombre) {
        this.nombre = nombre;
    }
    funcionar() {
        console.log(`${this.nombre} está funcionando`);
    }
}

// Clase Fabrica (como Document)
class Fabrica {
    constructor() {
        this.maquinas = [];
    }
    crearRobot(nombre) {
        let robot = new Robot(nombre, "100 watts"); // Creamos un Robot con potencia fija
        this.maquinas.push(robot); // Guardamos el objeto
        return robot; // Devolvemos el objeto Robot
    }
}

// Clase Robot (como HTMLElement)
class Robot extends Maquina {
    constructor(nombre, potencia) {
        super(nombre);
        this.potencia = potencia;
    }
    caminar() {
        console.log(`${this.nombre} camina con ${this.potencia}`);
    }
}

// Probemos
let miFabrica = new Fabrica();
let robotFabrica = miFabrica.crearRobot("RoboX"); // Fabrica devuelve un Robot
robotFabrica.caminar(); // "RoboX camina con 100 watts"
console.log(robotFabrica.potencia); // "100 watts"
console.log(miFabrica.maquinas); // Lista con el robot