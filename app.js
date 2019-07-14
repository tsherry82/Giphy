// ************PSUEDOCODE*****************
// ***************VARIABLES*****************
var heroes = ["Batman", "Spider-Man", "Superman", "Thor", "Flash", "Ironman", "Wonderwoman", "Captain America", "Aquaman", "Black Panther", "Loki", "Hulk", "Green Lantern", "Wolverine", "Green Arrow", "Rogue", "Black Canary", "Professor X", "Joker", "Magneto"];

function displayHeroes() {
    var heroes = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=swuazeKlO0Hpqnr978vfNEZd5hoFMz6h&q=" + heroes + "&limit=10&offset=0&rating=PG&lang=en"

    // **********AJAX**********
    $.ajax({
        url: queryURL,
        methond: "GET"
    }).then(function (response) {
        console.log(response);
    })
}
function renderButton() {
    $("#button-view").empty();

    for (var i = 0; i < heroes.length; i++) {
        ;

        var button = $("<button>");

        button.addClass("hero-button");
        button.attr("data-name", heroes[i]);
        button.text(heores[i]);
        $("#button-view").append(button);
    }
}
