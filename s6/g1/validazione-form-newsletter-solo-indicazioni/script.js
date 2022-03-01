// Quando il documento è pronto...
/*$("#iscr-news").submit(function(){
    if($('input:first').val() != undefined){
        $ ('#nome').text('*bravo');
        
        return;}
        {$('#nome').text('*richiesto')};
    });*/

    $(document).ready(() => {
        $("#iscr-news").click(function(){
            let validazione= true;
            var controllo = $("#nome").val()
            if(controllo == ""){
            $("#nome").next().text("Richiesto").css('color', 'red')
                validazione=false;
            }
            else{
                $("#nome").next().text("")
            }
            var controllo1 = $("#email-1").val()
            var controllo2 = $("#email-2").val()
            if(controllo1 == ""){
                $("#email-1").next().text("Richiesto").css('color', 'red')
                validazione=false;
            }
            else{
                $("#email-1").next().text("")
            }
            if(controllo2 == ""){
                $("#email-2").next().text("Richiesto").css('color', 'red')
                validazione=false;

            }
            else{
                $("#email-2").next().text("")
            }

            if(controllo1 != controllo2) {
                $("#email-2").next().text("non uguali").css('color', 'red')
                validazione=false;

            } else if (controllo1 == '' && controllo2 == ''){
                $('#email-2').next().text('non ce nada').css('color', 'red')
                validazione=false;

            }
             else {
                $("#email-2").next().text("sono uguali").css('color', 'green')
            }
        })
        
  if(validazione){
      $('#form-email').submit()
  }
        

$('#pulisci-form').click(function(){
    $(this).closest('form').find("input[type=text], textarea").val("");

})
        
    })

    

/*let var1 = true;
let var2 = false;
$(document).ready(function(){
    $('#iscr-news').focus(function (){
        var funz= document.getElementsByTagName(span).innerHTML;
        funz.text('ce lahi fatta')

    }) 

})*/

    //gestisco il click sul pulsante Iscriviti
   
        // inizializzo una variabile di controllo a true
    
        // utilizzo una dichiarazione if e se il valore di nome è presente altrimenti devo scrivere *Richiesto
        /*if (value != null){


        } else {
            var Null = document.getElementById('nome').value;
            Null.text('*Richiesto')
            



        }*/
        // nell'else uso next e text per impostare l'elemento span adiacente
        
        // assegno a due variabili il valore dei due campi email
        
        // ripeto la condizione nel nome anche per l'email
        
        // nella verifica devo mettere una ulteriore condizione se le email inserite sono diverse

        //invio del form se tutti i campi sono validi

    //gestisco il click sul pulsante Pulisci il form, i campi devono essere vuoti e 
    //posizionare un asterisco per identificare il campo obbligatorio. 
