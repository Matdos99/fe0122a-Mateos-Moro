$("<div>  </div>")
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


}