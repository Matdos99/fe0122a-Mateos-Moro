
document.getElementById('bottone2').addEventListener('click', function (e) {
    e.preventDefault()
    var nome = document.getElementById('nome')
    var cognome = document.getElementById('cognome')


    var ls = localStorage.getItem('Utenti')

    var db = ls ? JSON.parse(ls) : []

    db.forEach((element, indice) => {
        if (nome.value == db[indice].nome && cognome.value == db[indice].cognome) {
            document.getElementById('log').innerHTML = "l'utente " + nome.value + " si e collegato"


        } else {

            document.getElementById('log').innerHTML = ''
        }


    });


})




class Utenti {
    constructor(nome, cognome, password, email) {
        this.nome = nome
        this.cognome = cognome
        this.email = email
        this.password = password
    }
}






