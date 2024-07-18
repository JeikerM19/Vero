import Cl_operador from "./Cl_operador.js";

let c, tO, hT, pB;

c = prompt("Ingrese su cedula: ");
tO = parseInt(prompt("Ingrese el tipo de operador: (1)Supervisor, (2)Diseñador, (3)Costurera, (4)Bordador, (5)Empacador " ));
hT = parseInt(prompt("Ingrese las horas trabajadas: "));
pB = parseInt(prompt("Ingrese el sueldo base: "));

let oper = new Cl_operador(c, tO, hT, pB);
let salida = document.getElementById("Salida");
salida.innerHTML += "Salida: " + "<br> cédula " + oper.cedula+ "<br> el precio de la hora extra es: " + oper.incremento() + "<br> Cantidad de horas extras trabajadas: " + oper.cantidadExt() + "<br> El bono de horas extras es: " + oper.bonoExt() + "<br> El total a cobrar es de: " + oper.total();