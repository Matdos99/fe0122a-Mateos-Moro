//RICHIAMO DATI DAL LOCAL STORAGE - EMAIL
let esperimento = localStorage.getItem("utentiSalvati");
let arrayUtenti = JSON.parse(esperimento);

let tBody = document.querySelector("tbody")



arrayUtenti.forEach(function (element, ind) {

    let tr = document.createElement("tr")

    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")

    let td7 = document.createElement("td")
    let pulsante = document.createElement("button")

    let td8 = document.createElement("td")
    let pulsante1 = document.createElement("button")

    td.innerText = element.nome;
    td1.innerText = element.cognome;
    td2.innerText = element.email;
    td3.innerText = element.password;
    td4.innerText = element.indirizzo;
    td5.innerText = element.citta;
    td6.innerText = element.zip;
    pulsante.innerText = "Remove"
    pulsante1.innerText = "Modify"

    pulsante.classList.add("btn", "btn-warning", "btn-sm", "background-color")
    pulsante1.classList.add("btn", "btn-warning", "btn-sm", "background-color")

    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);

    tr.appendChild(td7).appendChild(pulsante);
    tr.appendChild(td8).appendChild(pulsante1);

    tBody.appendChild(tr);

    //FUNZIONI PULSANTI
    pulsante.addEventListener("click", () => {
        tr.remove()
        arrayUtenti.splice(ind, 1)
        localStorage.setItem("utentiSalvati", JSON.stringify(arrayUtenti));
    })

    pulsante1.addEventListener("click", () => {

    })

});


let pulsantePulisciTutto = document.querySelector("#clearAll")
let allCreate = document.querySelectorAll("tbody tr")

pulsantePulisciTutto.addEventListener("click", () => {
    tBody.remove()
    localStorage.clear()
})


