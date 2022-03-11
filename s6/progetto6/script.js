var BoxOpened = "";
var ImgOpened = "";
var Counter = 0;
var ImgFound = 0;

var Source = "#boxcard";

var ImgSource = [
    "https://www.drcommodore.it/wp-content/uploads/2020/07/Communist-Bugs-Bunny.png",
    "https://cdn-idoli-a.facciabuco.com/245/bugs-bunny/idolo.jpg?v=0",
    "https://www.meme-arsenal.com/memes/583966108e9ee3e70423cdeeab1d5cf4.jpg",
    "https://www.meme-arsenal.com/memes/6d599381a0d0ea0c6e497893a1e8ca3f.jpg",
    "https://i0.wp.com/inazumasensei.altervista.org/wp-content/uploads/2020/03/wabbit-season.jpg",
    "https://i.imgflip.com/5pcnip.jpg",
    "https://cdnmetv.metv.com/z50xp-1619719725-16226-list_items-no.jpg",
    "https://www.meme-arsenal.com/memes/89c43e6376f157f7a8e43ae0be951fa1.jpg",

];

function RandomFunction(Max, Min) {
    return Math.round(Math.random() * (Max - Min) + Min);
}

function mescolaImg() {
    var ImgAll = $(Source).children();
    var ImgThis = $(Source + " div:first-child");
    var ImgArr = new Array();

    for (var i = 0; i < ImgAll.length; i++) {
        ImgArr[i] = $("#" + ImgThis.attr("id") + " img").attr("src");
        ImgThis = ImgThis.next();
    }

    ImgThis = $(Source + " div:first-child");

    for (var z = 0; z < ImgAll.length; z++) {
        var RandomNumber = RandomFunction(0, ImgArr.length - 1);

        $("#" + ImgThis.attr("id") + " img").attr("src", ImgArr[RandomNumber]);
        ImgArr.splice(RandomNumber, 1);
        ImgThis = ImgThis.next();
    }
}

function ResetGame() {
    mescolaImg();
    $(Source + " div img").hide();
    $(Source + " div").css("visibility", "visible");
    Counter = 0;
    $('a').text()
    $("#success").remove();
    $("#counter").html("" + Counter);
    BoxOpened = "";
    ImgOpened = "";
    ImgFound = 0;
    return false;
}

function OpenCard() {
    var id = $(this).attr("id");

    if ($("#" + id + " img").is(":hidden")) {
        $(Source + " div").unbind("click", OpenCard);

        $("#" + id + " img").slideDown('fast');

        if (ImgOpened == "") {
            BoxOpened = id;
            ImgOpened = $("#" + id + " img").attr("src");
            setTimeout(function () {
                $(Source + " div").bind("click", OpenCard)
            }, 300);
        } else {
            CurrentOpened = $("#" + id + " img").attr("src");
            if (ImgOpened != CurrentOpened) {
                setTimeout(function () {
                    $("#" + id + " img").slideUp('fast');
                    $("#" + BoxOpened + " img").slideUp('fast');
                    BoxOpened = "";
                    ImgOpened = "";
                }, 400);
            } else {

                ImgFound++;
                BoxOpened = "";
                ImgOpened = "";

            }
            setTimeout(function () {
                $(Source + " div").bind("click", OpenCard)
            }, 400);
        }
        Counter++;
        $("#counter").html("" + Counter);

        if (ImgFound == ImgSource.length) {
            alert('Bravo, hai battuto il coniglio')
            $('a').text('Resetta')
        }

    }
}

$(function () {

    for (var y = 1; y < 3; y++) {
        $.each(ImgSource, function (i, val) {
            $(Source).append("<div id=card" + y + i + "><img src=" + val + " />");
        });
    }
    $(Source + " div").click(OpenCard);
    mescolaImg();
});