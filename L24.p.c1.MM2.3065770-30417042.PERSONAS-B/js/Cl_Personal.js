export default class Cl_Personal {
    constructor (sueldo, cargo) {
        this.sueldo = sueldo;
        this.cargo = cargo;
    }
    calcularTipo() {
        if (this.cargo === "obrero") {
            return "obrero";
        } 
        else if (this.cargo === "administrativo") {
            return "administrativo";
        }
    }
    calcularSueldo() {
        if (this.calcularTipo() === "obrero") {
            return this.sueldo * 0.2;
        } 
        else if (this.calcularTipo() === "administrativo") {
            return this.sueldo * 0.1;
        }
    }
    totalSueldos() {
        return this.sueldo + this.calcularSueldo();
    }
}