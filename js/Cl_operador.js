export default class Cl_operador {
    constructor(c, tO, hT, pB) {
        this.cedula = c;
        this.tipoOp = tO;
        this.horasT = hT;
        this.precioB = pB
    }
    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set tipoOp(tO) {
        this._tipoOp = tO;
    }
    get tipoOp() {
        return this._tipoOp;
    }
    set horasT(hT) {
        this._horasT = hT;
    } get horasT() {
        return this._horasT;
    }
    set precioB(pB) {
        this._precioB = pB;
    } get precioB() {
        return this._precioB;
    }
    incremento() {
        if (this.tipoOp == 1) {
            return this.precioB * 0.32;
        } else if (this.tipoOp == 2) {
            return this.precioB * 0.23;
        } else if (this.tipoOp == 3) {
            return this.precioB * 0.17;
        } else if (this.tipoOp == 4) {
            return this.precioB * 0.07;
        } else if (this.tipoOp == 5) {
            return this.precioB * 0.05;
        }
    }
    cantidadExt() {
        if (this.horasT > 40) {
            return this.horasT - 40;
        } else {
            return 0;
        }
    }
    bonoExt() {
        return this.cantidadExt() * this.incremento();
    }
    total(){
        return this.bonoExt() + this.precioB;
    }

}