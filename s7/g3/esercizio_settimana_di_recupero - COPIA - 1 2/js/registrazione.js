//inserisco nella let pulsante il button del form
let pulsante = document.querySelector(".btn");

//inserisco tutti gli elementi con la calsse ".form-control" nella let "allValue"
let allValue = document.querySelectorAll(".form-control");

//inserisco nella let avviso gli elementi span con classe avviso
let avviso = document.querySelectorAll(".avviso");

//inserisco l'intero tag form in una let
let form = document.querySelector("form");



//creo evento click correlato al button
//alla funzione anonima presente all'interna dello stesso do un parametro: evento
//evento quindi si riferisce al type="sumbmit"
pulsante.addEventListener("click", function (evento) {

  //inserisco all'interno di una variabile un booleano settato su true
  //questo mi tornerà utile per la validazione
  let formValido = true;

  //siccome il type con valore "submit" (presente fra gli attributi del button)
  //esegue in automatico l'invio dei dati, appunto di default
  // bisogna fermare questo evento, e lo si fa con il metodo "preventDefault()"
  evento.preventDefault();

  //ASSEGNAMENTO IN DESTRUTTURAZIONE
  //creo una variabile contenente rispettivamente ciascun input presente
  let [nome, cognome, email, password, indirizzo, citta, zip] = allValue;

  allValue.forEach(function (elemento) {
    if (elemento.value == "") {
      elemento.nextElementSibling.textContent = "Richiesto";
      formValido = false;
    } else {
      elemento.nextElementSibling.textContent = "*";
    }
  });

  emailUtenti.forEach(function (elemento) {
    if (elemento == email.value) {
      email.nextElementSibling.textContent = "Questa mail è già presente";
      formValido = false;
    }
  });

  if (formValido) {
    var nuovoUtente = new utente(nome.value, cognome.value, email.value, password.value, indirizzo.value, citta.value, zip.value
    );
    salvaDati(nuovoUtente);

    alert("Wow! Sei dei nostri!");

    //aggiungo la nuova pagina alla cronologia del browser
    history.pushState({}, "", "login.html");

    location.href = "login.html";
  }

  /*    
        }else if(email.nextElementSibling.textContent == "Questa mail è già presente"){
        alert("Ehi, sei già registrato!")
       
        }else{
            alert("Dimentichi qualcosa!")
        }  */
});

function salvaDati(aggiungi) {
  let user = localStorage.getItem("utentiSalvati");
  let dataBase = user ? JSON.parse(user) : [];
  dataBase.push(aggiungi);
  localStorage.setItem("utentiSalvati", JSON.stringify(dataBase));
}

class utente {
  constructor(nome, cognome, email, password, indirizzo, citta, zip) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password = password;
    this.indirizzo = indirizzo;
    this.citta = citta;
    this.zip = zip;
  }
}


let esperimento = localStorage.getItem("utentiSalvati");
let esperimento2 = JSON.parse(esperimento);
let emailUtenti = [];


