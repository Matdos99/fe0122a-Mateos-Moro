var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SonAccount = /** @class */ (function () {
    function SonAccount(balanceInit) {
        this.dati = 0;
        this.balanceInit = 0;
        this.balanceInit = balanceInit;
    }
    SonAccount.prototype.oneDeposit = function (sommaDeposit) {
        return this.balanceInit += sommaDeposit;
    };
    SonAccount.prototype.oneWuthDraw = function (sommaPrelevata) {
        return this.balanceInit -= sommaPrelevata;
    };
    SonAccount.prototype.twoDeposit = function (sommaAggiunta2) {
        return this.balanceInit += sommaAggiunta2;
    };
    SonAccount.prototype.twoWithDraw = function (sommaPrelevata2) {
        return this.balanceInit -= sommaPrelevata2;
    };
    SonAccount.prototype.addInterest = function (interest) {
        return this.balanceInit * interest;
    };
    SonAccount.prototype.addInterest2 = function () {
        return this.balanceInit * 0.1;
    };
    return SonAccount;
}());
var arra = new SonAccount(0);
arra.oneDeposit(50);
arra.oneWuthDraw(20);
arra.oneDeposit(90);
console.log(arra.balanceInit);
console.log(arra.addInterest(0.3));
console.log(arra.addInterest2());
/*let pulsante = document.getElementById('clicca')
pulsante?.addEventListener('click', function () {
    let varia = new SonAccount()

})*/
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(balanceInit) {
        return _super.call(this, balanceInit) || this;
    }
    return MotherAccount;
}(SonAccount));
