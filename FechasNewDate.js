console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
let fecha=new Date()
console.log(fecha)
console.log(fecha.getDate())
console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.toLocaleDateString())
console.log("Fecha actual ")
let f = new Date(2024, 11, 25); // 25 de diciembre de 2024
let resta=(fecha-f);
let segundos=resta/(1000*60*60*24)



console.log(segundos);



