//imposta il tasto canc
function clearz() {
    document.getElementById("output").innerHTML = "0";

}
//funzione per togliere lo zero quando digitiamo un numero
function togliZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = ""
        document.getElementById("output").innerHTML = value;
    }
}
//funzione per percentuale
function percentuale() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;

}
//mostra i valori nel display
function display(value) {
    togliZero()
    document.getElementById("output").innerHTML += value;

}
//funzione per fare calcolo
function risultato() {
    togliZero()
    var equation = document.getElementById("output").innerHTML;
    var soluz = eval(equation);
    document.getElementById("output").innerHTML = soluz;

}
//per non far ripetere operatori

