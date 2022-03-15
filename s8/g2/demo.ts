class SonAccount {    //classe principale, dove aggiungere costruttor e metodi

    balanceInit: number = 0    //bilancio(saldo del conto)

    constructor(balanceInit: number) {    //costruttore
        this.balanceInit = balanceInit

    }


    oneDeposit(sommaDeposit: number): number {    //serve per aggiungere fondi al conto

        return this.balanceInit += sommaDeposit

    }

    oneWuthDraw(sommaPrelevata: number): number {  //serve per togliere fondi al conto
        return this.balanceInit -= sommaPrelevata
    }
    twoDeposit(sommaAggiunta2: number): number {    //lo usiamo per il secondo conto, metodo che verrà esteso
        return this.balanceInit += sommaAggiunta2
    }
    twoWithDraw(sommaPrelevata2: number): number {  //idem
        return this.balanceInit -= sommaPrelevata2
    }
    addInterest(interest: number): number {    //puoi scegliere l'interesse
        return this.balanceInit * interest
    }
    addInterest2(): number {           //interesse fisso al 10%
        return this.balanceInit * 0.1
    }
}

let arra = new SonAccount(0)              //creiamo un nuovo conto, che parte da 0

arra.oneDeposit(50)         //aggiungiamo 50 al conto creato
arra.oneWuthDraw(20)        //togliamo 20 al conto creato   
arra.oneDeposit(90)         //aggiungo altri 90
console.log(arra.balanceInit)      //mi mostra nella console il saldo attuale
console.log(arra.addInterest(0.3))   //interessi al 30%
console.log(arra.addInterest2())     //interesse fisso al 10%


/*let pulsante = document.getElementById('clicca')
pulsante?.addEventListener('click', function () {
    let varia = new SonAccount()

})*/


class MotherAccount extends SonAccount {     //secondo conto, estensione di quello sopra
    constructor(balanceInit: number) {
        super(balanceInit)                //si usa super per estendere la parte con this.balanceInit = balanceInit
    }
}








