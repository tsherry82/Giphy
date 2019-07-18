// ************PSUEDOCODE*****************
// ***************VARIABLES*****************
var heroes = ["Batman", "Spider-Man", "Superman", "Thor", "The Flash", "Ironman", "Wonderwoman", "Captain America", "Aquaman", "Black Panther", "Loki", "Hulk", "Green Lantern", "Wolverine", "Green Arrow", "Rogue", "Black Canary", "Professor X", "Joker", "Magneto"];


// **********FUNCTIONS**********
function displayHeroes() {
    var heroesOne = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + heroesOne + "&api_key=M3lQ64OulYwHWOmWxOkBCxwbDWpTc8sM&limit=10"

    // **********AJAX**********


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // $("#hero-view").remove();

        var responseStuff = response.data;
        for (var i = 0; i < responseStuff.length; i++) {

            var rating = responseStuff[i].rating;
            var pOne = $("<p>").text("Rating: " + rating);

            $("#hero-view").append(pOne);

            var image = responseStuff[i].images.fixed_height.url;

            var pTwo = $("<img>");
            pTwo.attr("src", image);
            pTwo.addClass("heroGif");
            $("#hero-view").append(pTwo);
        }
    });

}

// **********BUTTONS**********


function renderButton() {

    $("#button-view").empty()

    for (var i = 0; i < heroes.length; i++) {

        var button = $("<button>");

        button.addClass("hero-btn");

        button.attr("data-name", heroes[i]);

        button.text(heroes[i]);

        $("#button-view").append(button);

    }
}




// **********ADDING MORE HEROES**********
$("#add-hero").on("click", function (event) {

    event.preventDefault();

    var newHeroes = $("#hero-input").val();

    heroes.push(newHeroes);


    $("#hero-input").val("");

    renderButton();


});
$(document).on("click", ".hero-btn", displayHeroes);

$(".heroGif").on("click", function () {

    var state = $(this).attr("data-state");
    var animate = response.data[i].images.fixed_height.url;
    var still = response.data[i].images.fixed_height_still.url;
    if (state === "still") {

        $(this).attr("src", $(this), animate);
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this), still);
        $(this).attr("data-state", "still");
    }
});

renderButton();



