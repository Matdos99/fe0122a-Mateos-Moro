var toggle = document.querySelector('#menu .toggle')

//se clicco su toggle esegui la funzione

toggle.addEventListener('click', function () {
    let tendina = document.querySelector('.tendina')
    tendina.classList.toggle('nascosto')
})


//metodo2 per dropdown

var toggle2 = document.querySelector('#menu2 .toggle')



toggle2.addEventListener('click', function () {
    let tendina = document.querySelector('#menu2 .tendina')
    if (tendina.style.display == 'block') {
        tendina.style.display = 'none';
    } else {
        tendina.style.display = 'block';
    }
})
