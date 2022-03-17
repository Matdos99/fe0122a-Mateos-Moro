interface Smartphone {
    numberCarica: number
    numeroCall: number
    costoMinuto: number

    ricarica(soldi: number): number
    minutiDurata(minuti: number): number
    numero404(): number
    getnumeroChiamate(): number
}

class FirstUser implements Smartphone {
    numberCarica: number
    numeroCall: number
    costoMinuto: number = 0.20
    constructor(numberCarica: number, numeroCall: number) {
        this.numberCarica = numberCarica
        this.numeroCall = numeroCall
    }
    ricarica(soldi: number) {
        return this.numberCarica += soldi
    }
    minutiDurata(minuti: number) {
        return this.numeroCall += minuti
    }
    numero404() {
        let soldoni: number = this.numeroCall * 0.20

        return this.numberCarica -= soldoni

    }
    getnumeroChiamate() {
        return this.numeroCall

    }

    azzeraCallM(): void {
        this.numeroCall = 0
    }

    consoleDati() {
        return

    }

}

let Mario = new FirstUser(10, 0)
console.log(Mario)
console.log(Mario.ricarica(10))
Mario.minutiDurata(40)
console.log(Mario.numero404())
console.log(Mario)

