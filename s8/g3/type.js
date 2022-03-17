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
var Tasse = /** @class */ (function () {
    function Tasse(redditoannuolordo) {
        this.reddittoannuolordo = redditoannuolordo;
    }
    return Tasse;
}());
//redditto lordo - tasse(tasse inps, irpef) = redditto netto
var Redanlordo = /** @class */ (function (_super) {
    __extends(Redanlordo, _super);
    function Redanlordo(redditoannuolordo) {
        return _super.call(this, redditoannuolordo) || this;
    }
    Redanlordo.prototype.getUtileTasse = function () {
        return this.getTasseInps() + this.getTasseIrpef();
    };
    Redanlordo.prototype.getTasseInps = function () {
        return this.reddittoannuolordo * 0.15;
    };
    Redanlordo.prototype.getTasseIrpef = function () {
        return this.reddittoannuolordo * 0.23;
    };
    Redanlordo.prototype.getReddittoNetto = function () {
        return this.reddittoannuolordo -= this.getUtileTasse();
    };
    return Redanlordo;
}(Tasse));
var Mario = new Redanlordo(20000);
var Luca = new Redanlordo(15000);
console.log(Mario.getTasseInps());
console.log(Mario.getTasseIrpef());
console.log(Mario.getUtileTasse());
console.log(Mario.getReddittoNetto());
console.log(Luca.getReddittoNetto());
