var arrayClass = [];
fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (vestiti) {
        var veste = new Capi(vestiti.id, vestiti.codprod, vestiti.collezione, vestiti.capo, vestiti.modello, vestiti.quantita, vestiti.colore, vestiti.prezzoivaesclusa, vestiti.prezzoivainclusa, vestiti.disponibile, vestiti.saldo);
        arrayClass.push(veste);
    });
    console.log(arrayClass);
    console.log(arrayClass[0]);
    console.log('Questo è lo sconto sul pezzo ' + arrayClass[0].id + ' del valore di ' + arrayClass[0].getSaldoCapo() + ' euro');
    console.log('Il prezzo che pagherai in cassa è di ' + arrayClass[0].getAcquistoCapo() + ' euro');
});
var Capi = /** @class */ (function () {
    function Capi(a, b, c, d, e, f, g, h, i, l, m) {
        this.id = a;
        this.codprod = b;
        this.collezione = c;
        this.capo = d;
        this.modello = e;
        this.quantita = f;
        this.colore = g;
        this.prezzoivaesclusa = h;
        this.prezzoivainclusa = i;
        this.disponibile = l;
        this.saldo = m;
    }
    Capi.prototype.getSaldoCapo = function () {
        return this.prezzoivainclusa * this.saldo / 100;
    };
    Capi.prototype.getAcquistoCapo = function () {
        return this.prezzoivainclusa - this.getSaldoCapo();
    };
    return Capi;
}());
var giubotto = new Capi(6, 5555, 'inverno', 'giubotto', 1222, 3, 'nero', 28.07, 35.99, 'magazzino', 40);
var maglietta = new Capi(7, 5342, 'estate', 'maglietta', 7521, 10, 'bianca', 12.47, 15.99, 'negozio', 35);
var scarpe = new Capi(8, 1965, 'estate', 'scarpe', 2003, 6, 'nere', 55.37, 70.99, 'negozio', 50);
arrayClass.push(giubotto);
arrayClass.push(maglietta);
arrayClass.push(scarpe);
