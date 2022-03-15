/* 
QUESTO È TROPPO LUNGO E COMPLESSO - VEDI QUELLO NON COMMENTATO!

//RICHIAMO DATI DAL LOCAL STORAGE - EMAIL
let esperimento = localStorage.getItem("utentiSalvati");
let esperimento2 = JSON.parse(esperimento);
let emailUtenti = [];

esperimento2.forEach(function (elemento) {
  elemento.email;
  emailUtenti.push(elemento.email);
});


//RICHIAMO DATI DAL LOCAL STORAGE - PASSW
let passwUtenti = [];

esperimento2.forEach(function (elemento) {
    elemento.password;
    passwUtenti.push(elemento.password);
});



//DEFINISCO LE VARIABILI
let inputMail = document.querySelector("#exampleInputEmail1")
let inputPass = document.querySelector("#exampleInputPassword1")
let bottone = document.querySelector("button")


//
bottone.addEventListener("click", function(evento){
    var logValid = false
    evento.preventDefault();

   
    emailUtenti.forEach(function(mail, indMail) {
        if(mail == inputMail.value) {
           //alert("la mail corrisponde")
            
            passwUtenti.forEach(function(pass, indPassw) {
                if(pass == inputPass.value && indMail == indPassw){
                    logValid = true
                    alert("Sei stato identificato")

                    history.pushState({}, "", "elencoUtenti.html");

                    location.href = "elencoUtenti.html";
                }
            })
            
        }
    });
    
    
})
*/


//RICHIAMO DATI DAL LOCAL STORAGE - EMAIL
let esperimento = localStorage.getItem("utentiSalvati");
let arrayUtenti = JSON.parse(esperimento);


//DEFINISCO LE VARIABILI
let inputMail = document.querySelector("#exampleInputEmail1")
let inputPass = document.querySelector("#exampleInputPassword1")
let bottone = document.querySelector("button")



bottone.addEventListener("click", function (evento) {

    evento.preventDefault();
//il metodo seguente va a sostituire tutti i cicli forEach inseriti precedentemente!
    let utenteTrovato = arrayUtenti.find(user => user.email == inputMail.value && user.password == inputPass.value)
    if(utenteTrovato != undefined){

        alert('Sei dentro!')
        history.pushState({}, "", "elencoUtenti.html");
        location.href = "elencoUtenti.html";

    }else{
        alert('c\'è qualcosa che non va')
    }

 /*   arrayUtenti.forEach(function (user) {
        if (user.email == inputMail.value && user.password == inputPass.value) {

            logValid = true
            history.pushState({}, "", "elencoUtenti.html");
            location.href = "elencoUtenti.html";

        } 
    });

    if(logValid){

        alert('sei dentro!');

    } else {

        alert('c'è un errore nei dati');

    }*/
})