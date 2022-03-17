fetch('Abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    data.forEach(function (vestiti) {
        var veste = new Capi(vestiti.id, vestiti.codprod, vestiti.collezione, vestiti.capo, vestiti.modello, vestiti.quantita, vestiti.colore, vestiti.prezzoivaesclusa, vestiti.prezzoivainclusa, vestiti.disponibile, vestiti.saldo);
        console.log(veste);
        console.log('Lo sconto sul pezzo ' + veste.id + ' e di: ' + veste.getSaldoCapo());
        console.log('Pagherai alla cassa, tolto lo sconto, il prezzo di: ' + veste.getAcquistoCapo());
    });
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
console.log(giubotto);
console.log('Lo sconto sul pezzo ' + giubotto.id + ' e di: ' + giubotto.getSaldoCapo());
console.log('Pagherai alla cassa, tolto lo sconto, il prezzo di: ' + giubotto.getAcquistoCapo());
console.log(maglietta);
console.log('Lo sconto sul pezzo ' + maglietta.id + ' e di: ' + maglietta.getSaldoCapo());
console.log('Pagherai alla cassa, tolto lo sconto, il prezzo di: ' + maglietta.getAcquistoCapo());
console.log(scarpe);
console.log('Lo sconto sul pezzo ' + scarpe.id + ' e di: ' + scarpe.getSaldoCapo());
console.log('Pagherai alla cassa, tolto lo sconto, il prezzo di: ' + scarpe.getAcquistoCapo());
