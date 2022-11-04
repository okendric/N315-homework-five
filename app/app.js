var GAMES = [
    {
    gameTitle: "Zelda BOTW",
    gameThumbnail: "zelda_150.jpg",
    gameFullImg: "zelda_300.jpg",
    gameReleaseDate: "March 3, 2017",
    gamePlatform: "Nintendo Switch, Wii U",
    gameMode: "Single-player",
    gameGoogleRating: "96% liked this game",
},
{
    gameTitle: "Cuphead",
    gameThumbnail: "cuphead_150.jpg",
    gameFullImg: "cuphead_300.jpg",
    gameReleaseDate: "September 29, 2017",
    gamePlatform: "Nintendo Switch, Windows, etc.",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "97% liked this game",
},
{
    gameTitle: "Fortnite",
    gameThumbnail: "fortnite_150.jpg",
    gameFullImg: "fortnite_300.jpg",
    gameReleaseDate: "July 21, 2017",
    gamePlatform: "Nintendo Switch, Windows, etc.",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "96% liked this game",
},
{
    gameTitle: "Halo",
    gameThumbnail: "halo_150.jpg",
    gameFullImg: "halo_300.jpg",
    gameReleaseDate: "November 15, 2021",
    gamePlatform: "Xbox, Windows",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "91% liked this game",
},
{
    gameTitle: "Horizon Zero Dawn",
    gameThumbnail: "horizon_150.jpg",
    gameFullImg: "horizon_300.jpg",
    gameReleaseDate: "February 28, 2017",
    gamePlatform: "Playstation 4, Windows",
    gameMode: "Single-player",
    gameGoogleRating: "95% liked this game",
},
{
    gameTitle: "Minecraft",
    gameThumbnail: "minecraft_150.jpg",
    gameFullImg: "minecraft_300.jpg",
    gameReleaseDate: "November 18, 2011",
    gamePlatform: "Nintendo Switch, Windows, etc.",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "93% liked this game",
},
{
    gameTitle: "Overwatch 2",
    gameThumbnail: "ow2_150.jpg",
    gameFullImg: "ow2_300.jpg",
    gameReleaseDate: "October 4, 2022",
    gamePlatform: "Nintendo Switch, Xbox, etc.",
    gameMode: "Multiplayer",
    gameGoogleRating: "57% liked this game",
},
{
    gameTitle: "Red Dead Redemption 2",
    gameThumbnail: "rdr2_150.jpg",
    gameFullImg: "rdr2_300.jpg",
    gameReleaseDate: "October 26, 2018",
    gamePlatform: "Xbox, Windows, etc.",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "96% liked this game",
},
{
    gameTitle: "Rocket League",
    gameThumbnail: "rocket_150.jpg",
    gameFullImg: "rocket_300.jpg",
    gameReleaseDate: "July 7, 2015",
    gamePlatform: "Xbox, Playstation 4, etc.",
    gameMode: "Single-player, Multiplayer",
    gameGoogleRating: "95% liked this game",
},
{
    gameTitle: "Valorant",
    gameThumbnail: "valorant_150.jpg",
    gameFullImg: "valorant_300.jpg",
    gameReleaseDate: "June 2, 2022",
    gamePlatform: "Windows",
    gameMode: "Multiplayer",
    gameGoogleRating: "90% liked this game",
}];


function loadData() {
    $.each(GAMES, function(index, game){
        $("#app").append(`<div id="${index}" class="game-wrap">
        <h3>${game.gameTitle}</h3>
        <div class="game-image">
        <img src="images/150_Image/${game.gameThumbnail}" alt="${game.gameTitle}" />
        </div>
        <div class="gameStats">


        <div class="release">
        ${game.gameReleaseDate}
        </div>

        <div class="mode">
        ${game.gameMode}
        </div>

        <div class="google">
        ${game.gameGoogleRating}
        </div>

    </div>

</div>`);
    })
}


function initListeners() {}

$(document).ready(function() {
    //initListeners();
    loadData();
})