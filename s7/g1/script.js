document.getElementById('bottone1').addEventListener('click', function (e) {

    var nome = document.getElementById('nome')
    var cognome = document.getElementById('cognome')
    var password = document.getElementById('password')
    var email = document.getElementById('email')



    if (nome.value == '') {
        nome.style.border = '1px solid red'

    } else {
        nome.style.border = ''
    }
    if (cognome.value == '') {
        cognome.style.border = '1px solid red'


    } else {
        cognome.style.border = ''
    }
    if (password.value == '') {
        password.style.border = '1px solid red'
    } else { password.style.border = '' }

    if (email.value == '') {
        email.style.border = '1px solid red'
    } else { email.style.border = '' }




    /*const compUtente1 = new Utenti('Mateos', 'Moro', 'm@', 'gesu')
    console.log(compUtente1)
    const compUtente2 = new Utenti('Filippo', 'd', 'm@', 'gesu')
    const compUtente3 = new Utenti('Ciro', 'p', 'm@', 'gesu')
    const compUtente4 = new Utenti('Lauretta', 'j', 'm@', 'gesu')*/

    const compUtente1 = new Utenti(nome.value, cognome.value, password.value, email.value)



    /*class Valori extends Utenti {
        constructor() {
    
            this.valore = this.valore
        }
    }*/


    var ls = localStorage.getItem('Utenti')

    var db = ls ? JSON.parse(ls) : []

    db.push(compUtente1)

    localStorage.setItem('Utenti', JSON.stringify(db))


    /*localStorage.setItem('Utenti1', JSON.stringify(compUtente2))
    localStorage.setItem('Utenti2', JSON.stringify(compUtente3))
    localStorage.setItem('Utenti3', JSON.stringify(compUtente4)) */



})







class Utenti {
    constructor(nome, cognome, password, email) {
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
    }
}
/*
//while è come for ma la condizione di uscita non è definita a pieno
let x = 0//con while devi creare tu una variabile di controllo
while(x < 10){//definisci la condizione come fai con for
let div = document.createElement("div")
div.innerHTML = x
document.querySelector('body').append(div)
x++//devi essere tu a scrivere dove e quando incrementare o decrementare la variabile per uscire dal ciclo
//alto rischio di ciclo infinito
}*/


