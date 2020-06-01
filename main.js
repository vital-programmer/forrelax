var express = require("express");
var app = express();

app.use('/js', express.static('js'));
app.use('/json', express.static('json'));
app.use('/images', express.static('images'));
app.use('/songs', express.static('songs'));
app.use('/styles', express.static('styles'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res){

    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        let out = '';
        out += '<!DOCTYPE HTML>\n' +
            '<html>\n' +
            '<head>\n' +
            '    <meta charset = "utf-8">\n' +
            '    <title>ForRelax</title>\n' +
            '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
            '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
            '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
            '</head>\n' +
            '<body class = "main">\n' +
            '    <div class = "header">\n' +
            '        <h1 id = "site_logo">forRelax</h1>\n' +
            '        <nav class = "menu">\n' +
            '            <ul id = "menu_background"></ul>\n' +
            '            <ul>\n' +
            '                <li><a href="films.html">Фільми</a></li>\n' +
            '                <li><a href="games.html">Ігри</a></li>\n' +
            '                <li><a href="songs.html">Музика</a></li>\n' +
            '                <li><a href="recipes.html">Рецепти</a></li>\n' +
            '            </ul>\n' +
            '            <ul id = "login">\n' +
            '                <li><button type="submit">Вхід</button></li>\n' +
            '                <li><button type="submit">Реєстрація</button></li>\n' +
            '            </ul>\n' +
            '        </nav>\n' +
            '    </div>\n' +
            '    <div class = "space"></div>\n' +
            '    <div id = "layout">\n' +
            '        <div id = "col1">\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '            <p><a href = "main.html">Фільм "поклик пращурів" отримав оскар 2020</a></p>\n' +
            '        </div>\n' +
            '        <div id = "col2">\n' +
            '            <div id = "top_free_space"></div>\n' +
            '            <div class="top5">Топ-5 фільмів</div>\n' +
            '            <hr>\n' +
            '            <div id = "films">';
        db.collection('films').find({}).toArray(function (err, results) {
            if (err) throw err;
            let i = 0;
            console.log(";;;");
            results.forEach(function(result){
//                if (i < 5)
//                {
                    out += '<div class = "film">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p>' + result.title + '</p>';
                    out += '</div>';
                    console.log(";;;");
//                    i++;
//                }
            });
        });
        out += '</div>\n' +
            '            <div class="top5">Топ-5 ігор</div>\n' +
            '            <hr>\n' +
            '            <div id = "games">';
        db.collection('games').find({}).toArray(function (err, results) {
            if (err) throw err;
            let i = 0;
            results.forEach(function (result) {
                if (i < 5) {
                    out += '<div class = "film">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p>' + result.title + '</p>';
                    out += '</div>';
                    i++;
                }
            });
        });
        out += '</div>\n' +
            '            <div class="top5">Новинки музики</div>\n' +
            '            <hr>\n' +
            '            <div id = "songs">';
        db.collection('songs').find({}).toArray(function (err, results) {
            if (err) throw err;
            let i = 0;
            results.forEach(function (result) {
                if (i < 5) {
                    out += '<div class = "film">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p>' + result.singer + " - " + result.title + '</p>';
                    out += '</div>';
                    i++;
                }
            });
        });
        out += '</div>\n' +
            '            <div class="top5">Рецепти</div>\n' +
            '            <hr>\n' +
            '            <div id = "recipes">';
        db.collection('recipes').find({}).toArray(function (err, results) {
            if (err) throw err;
            let i = 0;
            results.forEach(function (result) {
                if (i < 5) {
                    out += '<div class = "film">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p>' + result.title + '</p>';
                    out += '</div>';
                    i++;
                }
            });
        });
        out += '</div>\n' +
            '            <div id = "bottom_free_space"></div>\n' +
            '        </div>\n' +
            '        <div id = "col3">\n' +
            '            <p>Ім\'я:</p>\n' +
            '            <input type = "text" class = "form-control">\n' +
            '            <p>Пароль:</p>\n' +
            '            <input type = "password" class = "form-control">\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class = "footer">\n' +
            '        <ul>\n' +
            '            <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
            '            <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
            '            <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
            '            <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
            '        </ul>\n' +
            '    </div>\n' +
            '    <script src = "js/jquery-3.4.1.min.js"></script>\n' +
            '    <script src = "js/heightControl.js"></script>\n' +
            '</body>\n' +
            '</html>';
        res.send(out);
        client.close();
    });
});


app.get('/films.html', function(req, res){

    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('films').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><a href = "index.html">Вхід</a></li>\n' +
                '            <li><a href = "index.html">Реєстрація</a></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "filters">\n' +
                '        <ul>\n' +
                '            <li><button type = "submit">Комедія</button></li>\n' +
                '            <li><button type = "submit">Жахи</button></li>\n' +
                '            <li><button type = "submit">Мелодрама</button></li>\n' +
                '            <li><button type = "submit">Історичні</button></li>\n' +
                '            <li><button type = "submit">Фантастика</button></li>\n' +
                '            <li><button type = "submit">Трилер</button></li>\n' +
                '            <li><button type = "submit">Документальний</button></li>\n' +
                '            <li><button type = "submit">Сімейний</button></li>\n' +
                '            <li><button type = "submit">Драма</button></li>\n' +
                '            <li><button type = "submit">Бойовик</button></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">'
            let i = 1;
            results.forEach(function(result){
                out += '<div class = "film_item">';
                out += '<a href ="film_info.html?filmId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" onclick="selectFilm(this.id)"}></a>';
                out += '<p class = "title">' + result.title + '</p>';
                out += '<p class = "film_main_info">' + result.year + ' | ' + result.country + ' | ' +
                    result.genre + '</p>';
                out += '<p class = "film_main_info"> Режисери: ' + result.directors + '<br>Актори: ' +
                    result.cast + '</p>';
                out += '</div>';
                i++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControlInLists.js"></script>\n' +
                '</body>\n' +
                '</html>'
                res.send(out);
        });
        client.close();
    });
});

app.get('/film_info.html', function(req, res){
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('films').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><button type="submit">Вхід</button></li>\n' +
                '            <li><button type="submit">Реєстрація</button></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "col1"></div>\n' +
                '    <div id = "col2">\n' +
                '        <div id = "film_list">';
            let id = 1;
            results.forEach(function(result) {
                if (id == req.query.filmId)
                {
                    out += '<div class = "film_info">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p class = "title">' + result.title + '</p>';
                    out += '<p class = "film_all_info"> Країна, рік: ' + result.country + ', ' + result.year
                        + '</br>';
                    out += 'Жанр: ' +result.genre + '</br>';
                    out += 'Режисери: ' + result.directors + '</br>';
                    out += 'Актори: ' + result.cast + '</br>';
                    out += 'Прем\'єра в Україні: ' + result.ukraine_premiere + '</br>';
                    out += 'Світова прем\'єра: ' + result.world_premiere + '</br>';
                    out += 'Бюджет: ' + result.budget + '</br>';
                    out += 'Касові збори в Україні: ' + result.ukraine_box_office + '</br>';
                    out += 'Тривалість: ' + result.duration + '</p>';
                    out += '<a href="' + result.link + '">Дивитись онлайн</a>';
                    out += '<hr>';
                    out += '<div class = "film_description">' + result.description + '</div>';
                    out += '</div>';
                }
                id++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '    <div id = "col3"></div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControl.js"></script>\n' +
                '</body>\n' +
                '</html>';
            res.send(out);
        });
        client.close();
    });
});

app.get('/games.html', function(req, res){

    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('games').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><a href = "index.html">Вхід</a></li>\n' +
                '            <li><a href = "index.html">Реєстрація</a></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "filters">\n' +
                '        <ul>\n' +
                '            <li><button type = "submit">Аркади</button></li>\n' +
                '            <li><button type = "submit">Головоломки</button></li>\n' +
                '            <li><button type = "submit">Екшн</button></li>\n' +
                '            <li><button type = "submit">Картярські</button></li>\n' +
                '            <li><button type = "submit">Перегони</button></li>\n' +
                '            <li><button type = "submit">Пригодницькі</button></li>\n' +
                '            <li><button type = "submit">Рольові</button></li>\n' +
                '            <li><button type = "submit">Симулятори</button></li>\n' +
                '            <li><button type = "submit">Спортивні</button></li>\n' +
                '            <li><button type = "submit">Стратегії</button></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">';
            let i = 1;
            results.forEach(function(result){
                out += '<div class = "film_item">';
                out += '<a href ="game_info.html?gameId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" "}></a>';
                out += '<p class = "title">' + result.title + '</p>';
                out += '<p class = "film_main_info">' + result.year + ' | ' +result.developer + ' | ' +
                    result.genre + '</p>';
                out += '<p class = "film_main_info">' +result.short_description + '</p>';
                out += '</div>';
                i++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControlInLists.js"></script>\n' +
                '</body>\n' +
                '</html>';
            res.send(out);
        });
        client.close();
    });
});

app.get('/game_info.html', function(req, res){
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('games').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><button type="submit">Вхід</button></li>\n' +
                '            <li><button type="submit">Реєстрація</button></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "col1"></div>\n' +
                '    <div id = "col2">\n' +
                '        <div id = "game_list">';
            let id = 1;
            results.forEach(function(result) {
                if (id == req.query.gameId)
                {
                    out += '<div class = "film_info">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p class = "title">' + result.title + '</p>';
                    out += '<p class = "film_all_info"> Рік: ' + result.year + '</br>';
                    out += 'Жанр: ' + result.genre + '</br>';
                    out += 'Розробник: ' + result.developer + '</br>';
                    for (let i = 0; i < 6; i++)
                    {
                        out += '</br>'
                    }
                    out += '<a href="' + result.link + '">Завантажити гру</a>';
                    out += '<hr>';
                    out += '<div class = "film_description">' + result.description + '</div>';
                    out += '</div>';
                }
                id++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '    <div id = "col3"></div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControl.js"></script>\n' +
                '</body>\n' +
                '</html>';
            res.send(out);
        });
        client.close();
    });
});

app.get('/songs.html', function(req, res){

    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('songs').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><a href = "index.html">Вхід</a></li>\n' +
                '            <li><a href = "index.html">Реєстрація</a></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "filters">\n' +
                '        <ul>\n' +
                '            <li><button type = "submit">Аркади</button></li>\n' +
                '            <li><button type = "submit">Головоломки</button></li>\n' +
                '            <li><button type = "submit">Екшн</button></li>\n' +
                '            <li><button type = "submit">Картярські</button></li>\n' +
                '            <li><button type = "submit">Перегони</button></li>\n' +
                '            <li><button type = "submit">Пригодницькі</button></li>\n' +
                '            <li><button type = "submit">Рольові</button></li>\n' +
                '            <li><button type = "submit">Симулятори</button></li>\n' +
                '            <li><button type = "submit">Спортивні</button></li>\n' +
                '            <li><button type = "submit">Стратегії</button></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "col2">\n' +
                '        <div id = "film_list">'
            let i = 1;
            results.forEach(function(result){
                out += '<div class = "song_item">';
                out += '<hr>';
                out += '<img class = "song_image" src = "' + result.image + '">';
                out += '<p class = "singer">' + result.singer + '</p>';
                out += '<p class = "song_main_info">' + result.title + '</p>';
                out += '<p class = "duration">' + result.duration + '</p>';
                out += '<audio src = "' + result.song + '" id = "' + i + '"></audio>';
                out += '<button onclick="document.getElementById(' + i +').play()" class = "play_button" type="button">' +
                    '<img src = "images/film.jpeg"></button>';
                out += '<button onclick="document.getElementById(' + i +').pause()" class = "pause_button" type="button">' +
                    '<img src = "images/film.jpeg"></button>';
                out += '<div></div>';
                out += '<hr>';
                out += '</div>';
                i++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '    <div id = "col3"></div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControlInSongs.js"></script>\n' +
                '</body>\n' +
                '</html>'
            res.send(out);
        });
        client.close();
    });
});

app.get('/recipes.html', function(req, res){
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('recipes').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><a href = "index.html">Вхід</a></li>\n' +
                '            <li><a href = "index.html">Реєстрація</a></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "filters">\n' +
                '        <ul>\n' +
                '            <li><button type = "submit">Супи</button></li>\n' +
                '            <li><button type = "submit">Десерти</button></li>\n' +
                '            <li><button type = "submit">Закуски</button></li>\n' +
                '            <li><button type = "submit">Салати</button></li>\n' +
                '            <li><button type = "submit">Основні страви</button></li>\n' +
                '            <li><button type = "submit">Напої</button></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">';
            let i = 1;
            results.forEach(function(result){
                out += '<div class = "recipe_item">';
                out += '<a href ="recipe_info.html?recipeId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" onclick="selectRecipe(this.id)"}></a>';
                out += '<p class = "recipe_title">' + result.title + '</p>';
                out += '</div>';
                i++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControlInLists.js"></script>\n' +
                '</body>\n' +
                '</html>';
            res.send(out);
        });
        client.close();
    });
});

app.get('/recipe_info.html', function(req, res){
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('recipes').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '';
            out += '<!DOCTYPE HTML>\n' +
                '<html>\n' +
                '<head>\n' +
                '    <meta charset = "utf-8">\n' +
                '    <title>ForRelax</title>\n' +
                '    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"\n' +
                '          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">\n' +
                '    <link rel = "stylesheet" type = "text/css" href = "styles/styles.css">\n' +
                '</head>\n' +
                '<body class = "main">\n' +
                '<div class = "header">\n' +
                '    <h1 id = "site_logo">forRelax</h1>\n' +
                '    <nav class = "menu">\n' +
                '        <ul id = "menu_background"></ul>\n' +
                '        <ul>\n' +
                '            <li><a href="films.html">Фільми</a></li>\n' +
                '            <li><a href="games.html">Ігри</a></li>\n' +
                '            <li><a href="songs.html">Музика</a></li>\n' +
                '            <li><a href="recipes.html">Рецепти</a></li>\n' +
                '        </ul>\n' +
                '        <ul id = "login">\n' +
                '            <li><button type="submit">Вхід</button></li>\n' +
                '            <li><button type="submit">Реєстрація</button></li>\n' +
                '        </ul>\n' +
                '    </nav>\n' +
                '</div>\n' +
                '<div class = "space"></div>\n' +
                '<div id = "layout">\n' +
                '    <div id = "col1"></div>\n' +
                '    <div id = "col2">\n' +
                '        <div id = "film_list">';
            let id = 1;
            results.forEach(function(result) {
                if (id == req.query.recipeId)
                {
                    out += '<div class = "film_info">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p class = "title">' + result.title + '</p>';
                    out += '<p class = "film_all_info"> ІНГРЕДІЄНТИ' + '</br>' + result.ingredients + '</br>';
                    for (let i = 0; i < 8; i++)
                    {
                        out += '</br>'
                    }
                    out += '<hr>';
                    out += '<p align = "center"> ПРИГОТУВАННЯ </p>';
                    out += '<div class = "film_description">' + result.cooking + '</div>';
                    out += '</div>';
                }
                id++;
            });
            out += '</div>\n' +
                '        <div id = "bottom_free_space"></div>\n' +
                '    </div>\n' +
                '    <div id = "col3"></div>\n' +
                '</div>\n' +
                '<div class = "footer">\n' +
                '    <ul>\n' +
                '        <li><a href="https://www.youtube.com/watch?v=R82a_NXwbtg">Про нас</a></li>\n' +
                '        <li><a href="https://www.vodafone.ua/uk/404">Зв\'яжіться з нами</a></li>\n' +
                '        <li><a href="https://www.instagram.com/vitalijhanulych/">Ми в Instagram</a></li>\n' +
                '        <li><a href="https://www.facebook.com/profile.php?id=100010431215121">Ми у Facebook</a></li>\n' +
                '    </ul>\n' +
                '</div>\n' +
                '<script src = "js/jquery-3.4.1.min.js"></script>\n' +
                '<script src = "js/heightControl.js"></script>\n' +
                '</body>\n' +
                '</html>';
            res.send(out);
        });
        client.close();
    });
});

app.listen(3000, function(){
    console.log('Server has been started!');
});