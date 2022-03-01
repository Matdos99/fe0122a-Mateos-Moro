// Quando il documento è pronto...
$(()=>{
    $('h2').on('click', function(){
        $(this).next().toggle()
        
        $(this).toggleClass('meno')
        
        

    })
})

    // collega i gestori evento per il click per tutti i tag h2.
    
        // crea una variabile ed immagazzina al suo interno il tag h2 che inizializza l'evento (usa .currentTarget).
        
        
        // attiva la classe .meno dei CSS sul tag h2.
        

        // mostra o nascondi il div, utilizza un if-else.
        

        // utilizza il prepreventDefault() per prevenire che il gestore eventi di default sia eseguito.
    

    // imposta il focus sul primo tag ancor dell'h2
