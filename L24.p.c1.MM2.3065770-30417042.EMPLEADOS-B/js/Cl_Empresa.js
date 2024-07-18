export default class Cl_Empresa {
    constructor(){
        this.cntTotalPagos = 0;
    }

    totalSueldos() {
        return this.cntTotalPagos;
    }
    procesarPersonal(p){
        this.cntTotalPagos += p.totalSueldos();
    }
}