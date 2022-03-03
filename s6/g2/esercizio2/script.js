/*$("<div>  </div>")
    .css("height", "400px")
    .css("width", "400px")
    .css("background-color", "grey")
    .css("margin-left", "50vh")
    .appendTo('body');
//for (let i = 0; i < 1; i++) 

for (let i = 0; i < 16; i++) {
    $("div").append("<section> Teste </section>")
    $("div").children().css("height", "100px").css("width", "100px").css("display", "inline-block");
    $("section:odd").css("background-color", "white");


}*/

let scacchiera = document.createElement('div')
scacchiera.id = 'scacchiera'

document.querySelector('body').prepend(scacchiera)





for (let y = 0; y < 8; y++) {   //creiamo un ciclo che prevede la somma di x+y 
    for (let x = 0; x < 8; x++) {

        let div = document.createElement('div')
        div.classList.add('casella')


        let modulo = (y + x) % 2
        console.log(modulo)
        if (modulo == 0) {
            div.style.backgroundColor = 'brown'
        } else {
            div.style.backgroundColor = 'yellow'
        }





        document.querySelector('#scacchiera').append(div)

    }
}


$(() => {
    $('div').on('click', function () {
        $(this).css({
            backgroundColor: 'black'
        })
    })
    $('div').dblclick(function () {
        $(this).css({
            backgroundColor: 'white'
        })
    })

    $('button').click(function () {

    })
})