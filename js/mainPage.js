$('document').ready(function () {
    loadFilms();
    loadGames();
    loadSongs();
    loadRecipes()
});

function loadFilms() {
    $.getJSON('films.json', function (data) {
        let out = '';
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
        }
        $('#films').html(out);
    })
}

function loadGames() {
    $.getJSON('games.json', function (data) {
        let out = '';
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
        }
        $('#games').html(out);
    })
}
function loadSongs() {
    $.getJSON('songs.json', function (data) {
        let out = '';
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['singer'] + " - " +data[key]['title'] + '</p>';
            out += '</div>';
        }
        $('#songs').html(out);
    })
}
function loadRecipes  () {
    $.getJSON('recipes.json', function (data) {
        let out = '';
        for (let key in data){
            out += '<div class = "film">';
            out += '<img src = "' + data[key]['image'] + '">';
            out += '<p>' + data[key]['title'] + '</p>';
            out += '</div>';
        }
        $('#recipes').html(out);
    })
}