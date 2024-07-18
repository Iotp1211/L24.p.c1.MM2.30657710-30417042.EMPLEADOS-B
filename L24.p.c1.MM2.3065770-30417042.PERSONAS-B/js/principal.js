/**
En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al 
personal administrativo. La empresa necesita determinar cuánto es el total de sueldo (por 
empleado y por la empresa) que deberá pagar en la próxima nómina. 
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra 
el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana 
(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos 
(administrativo) gana $150: 
Juan tendrá un sueldo de $120 
Ana tendrá un sueldo de $144 
Lin tendrá un sueldo de $220 
Mary tendrá un sueldo de $60 
Carlos tendrá un sueldo de $165 
El total de sueldo que debe pagar la empresa es de $709
 */

import Cl_Personal from "./Cl_Personal.js";
import Cl_Empresa from "./Cl_Empresa.js";

let empresa = new Cl_Empresa();
let personal = new Cl_Personal();

let persona1 = new Cl_Personal(100, "obrero");
let persona2 = new Cl_Personal(120, "obrero");
let persona3 = new Cl_Personal(200, "administrativo");
let persona4 = new Cl_Personal(50, "obrero");
let persona5 = new Cl_Personal(150, "administrativo");

empresa.procesarPersonal(persona1);
empresa.procesarPersonal(persona2);
empresa.procesarPersonal(persona3);
empresa.procesarPersonal(persona4);
empresa.procesarPersonal(persona5);

let salida = document.getElementById("1");
salida.innerHTML = `
    Juan (obrero) actualmente gana $${persona1.totalSueldos()}<br>
    Ana (obrero) gana $${persona2.totalSueldos()}<br>
    Lin (administrativo) gana $${persona3.totalSueldos()}<br>
    Mary (obrero) gana $${persona4.totalSueldos()}<br>
    Carlos (administrativo) gana $${persona5.totalSueldos()}<br>
    El total de suelda que debe pagar la empresa es de $${empresa.totalSueldos()}
`;