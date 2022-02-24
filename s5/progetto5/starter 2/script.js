

var docu = document.getElementById('add_btn');
docu.addEventListener('click', function () {
    let aggiungi = document.getElementById('task_txt').value;
    let lembo = document.getElementById('tasks_list_html');

    var li = document.createElement('li');
    li.innerHTML = aggiungi;

    li.addEventListener('click', function (el) {
        li.remove();
        let ls = localStorage.getItem('lembo')
        let db = JSON.parse(ls)

        let indiceElemento = db.indexOf(el.innerHTML)

        db.splice(indiceElemento, 1)

        localStorage.setItem('lembo', JSON.stringify(db))
        //localStorage.removeItem('lembo')

    })

    lembo.append(li);

    li.classList.add('list-group-item');

    //con questa funzione salvo e aggiorno i dati in localstorage


    /*salvataggio dati*/

    /* versione estesa
    if( localStorage.getItem('elementiSalvati') == null ){
        var db = [aggiunta]
    }else{
    var db = JSON.parse(localStorage.getItem('elementiSalvati'))
    db.push(aggiunta)
}
*/

    var ls = localStorage.getItem('lembo')

    var db = ls ? JSON.parse(ls) : []
    db.push(aggiungi)

    localStorage.setItem('lembo', JSON.stringify(db))





})


/*li.addEventListener('click', function rimuoviElementodaDb(el) {


})*/
//con questa funzione rimuovo un elemento da localstorage
