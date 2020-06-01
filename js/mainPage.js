$('document').ready(function () {
    loadFilms();
    loadGames();
    loadSongs();
    loadRecipes()
});

function loadFilms() {
    $.getJSON('json/films.json', function (data) {
        let out = '';
        let amount = 0;
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
            amount++;
            if (amount == 5) break;
        }
        $('#films').html(out);
    })
}

function loadGames() {
    $.getJSON('json/games.json', function (data) {
        let out = '';
        let amount = 0;
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
            amount++;
            if (amount == 5) break;
        }
        $('#games').html(out);
    })
}
function loadSongs() {
    $.getJSON('json/songs.json', function (data) {
        let out = '';
        let amount = 0;
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['singer'] + " - " +data[key]['title'] + '</p>';
            out += '</div>';
            amount++;
            if (amount == 5) break;
        }
        $('#songs').html(out);
    })
}
function loadRecipes  () {
    $.getJSON('json/recipes.json', function (data) {
        let out = '';
        let amount = 0;
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
            amount++;
            if (amount == 5) break;
        }
        $('#recipes').html(out);
    })
}