abstract class Tasse {

    reddittoannuolordo: number


    constructor(redditoannuolordo: number) {
        this.reddittoannuolordo = redditoannuolordo


    }
    abstract getUtileTasse(): void
    abstract getTasseInps(): void
    abstract getTasseIrpef(): void


}

//redditto lordo - tasse(tasse inps, irpef) = redditto netto

class Redanlordo extends Tasse {

    constructor(redditoannuolordo: number) {
        super(redditoannuolordo)
    }
    getUtileTasse(): number {
        return this.getTasseInps() + this.getTasseIrpef()

    }
    getTasseInps(): number {
        return this.reddittoannuolordo * 0.15

    }
    getTasseIrpef(): number {
        return this.reddittoannuolordo * 0.23

    }
    getReddittoNetto(): number {
        return this.reddittoannuolordo -= this.getUtileTasse()
    }
}


let Mario = new Redanlordo(20000)
let Luca = new Redanlordo(15000)
console.log(Mario.getTasseInps())
console.log(Mario.getTasseIrpef())
console.log(Mario.getUtileTasse())

console.log(Mario.getReddittoNetto())
console.log(Luca.getReddittoNetto())