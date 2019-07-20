// ************PSUEDOCODE*****************
// ***************VARIABLES*****************
var heroes = ["Batman", "Spider-Man", "Superman", "Thor", "The Flash", "Ironman", "Wonderwoman", "Captain America", "Aquaman", "Black Panther", "Loki", "Hulk", "Green Lantern", "Wolverine", "Green Arrow", "Rogue", "Black Canary", "Professor X", "Joker", "Magneto"];


// **********FUNCTIONS**********
function displayHeroes() {

    $("#hero-view").empty()
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
            var newDiv = $("<div class='new-div'>")
            var pOne = $("<p>").text("Rating: " + rating);

            var image = responseStuff[i].images.fixed_height.url;
            var animate = response.data[i].images.fixed_height.url;
            var still = response.data[i].images.fixed_height_still.url;

            var pTwo = $("<img>");
            pTwo.attr("src", image);
            pTwo.attr("data-animate", animate);
            pTwo.attr("data-still", still);
            pTwo.addClass("heroGif");
            newDiv.append(pOne);
            newDiv.append(pTwo);
            $("#hero-view").append(newDiv);
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

$(document).on("click", ".heroGif", function () {

    var state = $(this).attr("data-state");



    if (state === "still") {

        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }
    else {
        $(this).attr("src", $(this).attr('data-still'));
        $(this).attr("data-state", "still");
    }
});

renderButton();



