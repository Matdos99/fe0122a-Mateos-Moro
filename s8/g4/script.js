var FirstUser = /** @class */ (function () {
    function FirstUser(numberCarica, numeroCall) {
        this.costoMinuto = 0.20;
        this.numberCarica = numberCarica;
        this.numeroCall = numeroCall;
    }
    FirstUser.prototype.ricarica = function (soldi) {
        return this.numberCarica += soldi;
    };
    FirstUser.prototype.minutiDurata = function (minuti) {
        return this.numeroCall += minuti;
    };
    FirstUser.prototype.numero404 = function () {
        var soldoni = this.numeroCall * 0.20;
        return this.numberCarica -= soldoni;
    };
    FirstUser.prototype.getnumeroChiamate = function () {
        return this.numeroCall;
    };
    FirstUser.prototype.azzeraCallM = function () {
        this.numeroCall = 0;
    };
    FirstUser.prototype.consoleDati = function () {
        return;
    };
    return FirstUser;
}());
var Mario = new FirstUser(10, 0);
console.log(Mario);
console.log(Mario.ricarica(10));
Mario.minutiDurata(40);
console.log(Mario.numero404());
console.log(Mario);
