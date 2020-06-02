var express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use('/js', express.static('js'));
app.use('/json', express.static('json'));
app.use('/images', express.static('images'));
app.use('/songs', express.static('songs'));
app.use('/styles', express.static('styles'));

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get("/addFilm.html", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/addFilm.html");
});

app.post("/addFilm.html", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('films').insertOne({
                "title": req.body.title,
                "image": req.body.image,
                "year": req.body.year,
                "country": req.body.country,
                "genre": req.body.genre,
                "directors": req.body.directors,
                "cast": req.body.cast,
                "scenarist": req.body.scenarist,
                "producers": req.body.producers,
                "ukraine_premiere": req.body.ukraine_premiere,
                "world_premiere": req.body.world_premiere,
                "budget": req.body.budget,
                "ukraine_box_office": req.body.ukraine_box_office,
                "duration": req.body.duration,
                "link": req.body.links,
                "description": req.body.description
            }
        );
        client.close();
    })
    res.sendFile(__dirname + '/index.html');
});

app.get("/addGame.html", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/addGame.html");
});

app.post("/addGame.html", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('games').insertOne({
                "title": req.body.title,
                "image": req.body.image,
                "year": req.body.year,
                "developer": req.body.developer,
                "genre": req.body.genre,
                "short_description": req.body.short_description,
                "description": req.body.description,
                "link": res.body.links
            }
        );
        client.close();
    })
    res.sendFile(__dirname + '/index.html');
});

app.get("/addSong.html", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/addSong.html");
});

app.post("/addSong.html", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('songs').insertOne({
                "singer": req.body.singer,
                "title": req.body.title,
                "image": req.body.image,
                "year": req.body.year,
                "duration": req.body.duration,
                "song": req.body.developer,
                "genre": req.body.genre,
            }
        );
        client.close();
    })
    res.sendFile(__dirname + '/index.html');
});

app.get("/addRecipe.html", urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/addRecipe.html");
});

app.post("/addRecipe.html", urlencodedParser, function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    var MongoClient = require('mongodb').MongoClient;

    var url = 'mongodb://localhost:27017';

    MongoClient.connect(url, function (err, client) {

        var db = client.db('forrelax');

        db.collection('recipes').insertOne({
                "title": req.body.title,
                "image": req.body.image,
                "ingredients": req.body.ingredients,
                "cooking": req.body.cooking,
                "type": req.body.type,
            }
        );
        client.close();
    })
    res.sendFile(__dirname + '/index.html');
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


/*app.get('/index.html', function(req, res){

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
                if (i < 5)
                {
                    out += '<div class = "film">';
                    out += '<img src = "' + result.image + '">';
                    out += '<p>' + result.title + '</p>';
                    out += '</div>';
                    console.log(out);
                    i++;
                }
            });
        });

        db.collection('games').find({}).toArray(function (err, results) {
            if (err) throw err;
            let out = '</div>\n' +
                '            <div class="top5">Топ-5 ігор</div>\n' +
                '            <hr>\n' +
                '            <div id = "games">';
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
}); */

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
                '            <li><a href = "films.html?genre=Комедія"><button type = "submit">Комедія</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Жахи"><button type = "submit">Жахи</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Мелодрама"><button type = "submit">Мелодрама</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Історичні"><button type = "submit">Історичні</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Фантастика"><button type = "submit">Фантастика</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Трилер"><button type = "submit">Трилер</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Документальний"><button type = "submit">Документальний</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Сімейний"><button type = "submit">Сімейний</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Драма"><button type = "submit">Драма</button></a></li>\n' +
                '            <li><a href = "films.html?genre=Бойовик"><button type = "submit">Бойовик</button></a></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">'
            let i = 1;
            results.forEach(function(result){
                if (req.query.genre == undefined || result.genre.toLowerCase().includes(req.query.genre.toLowerCase()))
                {
                    out += '<div class = "film_item">';
                    out += '<a href ="film_info.html?filmId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" onclick="selectFilm(this.id)"}></a>';
                    out += '<p class = "title">' + result.title + '</p>';
                    out += '<p class = "film_main_info">' + result.year + ' | ' + result.country + ' | ' +
                        result.genre + '</p>';
                    out += '<p class = "film_main_info"> Режисери: ' + result.directors + '<br>Актори: ' +
                        result.cast + '</p>';
                    out += '</div>';
                }
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
                '            <li><a href = "games.html?genre=Аркади"><button type = "submit">Аркади</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Головоломки"><button type = "submit">Головоломки</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Екшн"><button type = "submit">Екшн</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Картярські"><button type = "submit">Картярські</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Перегони"><button type = "submit">Перегони</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Пригодницькі"><button type = "submit">Пригодницькі</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Рольові"><button type = "submit">Рольові</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Симулятори"><button type = "submit">Симулятори</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Спортивні"><button type = "submit">Спортивні</button></a></li>\n' +
                '            <li><a href = "games.html?genre=Стратегії"><button type = "submit">Стратегії</button></a></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">';
            let i = 1;
            results.forEach(function(result){
                if (req.query.genre == undefined || result.genre.toLowerCase().includes(req.query.genre.toLowerCase()))
                {
                    out += '<div class = "film_item">';
                    out += '<a href ="game_info.html?gameId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" "}></a>';
                    out += '<p class = "title">' + result.title + '</p>';
                    out += '<p class = "film_main_info">' + result.year + ' | ' +result.developer + ' | ' +
                        result.genre + '</p>';
                    out += '<p class = "film_main_info">' +result.short_description + '</p>';
                    out += '</div>';
                }
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
/*        db.collection('games').insertMany([
           {
                "title": "Moto extreme",
                "image": "images/film.jpeg",
                "year": "2018",
                "developer": "EA Games",
                "genre": "Стратегії",
                "short_description": "Ну просто дуже класна гра!",
                "description": "Головний герой - видатний учений-біолог, що втратив в автокатастрофі свою сім'ю. Він одержимий бажанням повернути своїх близьких, виходячи за межі наукової етики і навіть самої природи.\n\nЦікаві факти про фільм \"Репродукція\":\n\n- Сюжет і сценарій кінороботи \"Репродукція\" створювалися під керівництвом кінокомпанії Кіану Рівза та Стівена Хемела Company Films.\n\n- З чуток,на одну з ролей розглядався Девід Стретхерн.\n\n- Зйомки фільму \"Репродукція\" проходили влітку 2016 року в Пуерто-Ріко.\n\n- Прем'єрний показ \"Репродукції\" відбувся на Міжнародному кінофестивалі в Торонто (2017).",
                "link": "https://www.google.com"
        },
        {
            "title": "Money movers",
                "image": "images/film.jpeg",
                "year": "2018",
                "developer": "EA Games",
                "genre": "Аркади",
                "short_description": "Ну просто дуже класна гра!",
                "description": "Головний герой - видатний учений-біолог, що втратив в автокатастрофі свою сім'ю. Він одержимий бажанням повернути своїх близьких, виходячи за межі наукової етики і навіть самої природи.\n\nЦікаві факти про фільм \"Репродукція\":\n\n- Сюжет і сценарій кінороботи \"Репродукція\" створювалися під керівництвом кінокомпанії Кіану Рівза та Стівена Хемела Company Films.\n\n- З чуток,на одну з ролей розглядався Девід Стретхерн.\n\n- Зйомки фільму \"Репродукція\" проходили влітку 2016 року в Пуерто-Ріко.\n\n- Прем'єрний показ \"Репродукції\" відбувся на Міжнародному кінофестивалі в Торонто (2017).",
                "link": "https://www.google.com"
        },
         {
            "title": "Plants vs zombies",
                "image": "images/film.jpeg",
                "year": "2018",
                "developer": "EA Games",
                "genre": "Головоломкия",
                "short_description": "Ну просто дуже класна гра!",
                "description": "Головний герой - видатний учений-біолог, що втратив в автокатастрофі свою сім'ю. Він одержимий бажанням повернути своїх близьких, виходячи за межі наукової етики і навіть самої природи.\n\nЦікаві факти про фільм \"Репродукція\":\n\n- Сюжет і сценарій кінороботи \"Репродукція\" створювалися під керівництвом кінокомпанії Кіану Рівза та Стівена Хемела Company Films.\n\n- З чуток,на одну з ролей розглядався Девід Стретхерн.\n\n- Зйомки фільму \"Репродукція\" проходили влітку 2016 року в Пуерто-Ріко.\n\n- Прем'єрний показ \"Репродукції\" відбувся на Міжнародному кінофестивалі в Торонто (2017).",
                "link": "https://www.google.com"
        },
       {
            "title": "Логічні ігри для дітей",
                "image": "images/film.jpeg",
                "year": "2018",
                "developer": "EA Games",
                "genre": "Стратегії",
                "short_description": "Ну просто дуже класна гра!",
                "description": "Головний герой - видатний учений-біолог, що втратив в автокатастрофі свою сім'ю. Він одержимий бажанням повернути своїх близьких, виходячи за межі наукової етики і навіть самої природи.\n\nЦікаві факти про фільм \"Репродукція\":\n\n- Сюжет і сценарій кінороботи \"Репродукція\" створювалися під керівництвом кінокомпанії Кіану Рівза та Стівена Хемела Company Films.\n\n- З чуток,на одну з ролей розглядався Девід Стретхерн.\n\n- Зйомки фільму \"Репродукція\" проходили влітку 2016 року в Пуерто-Ріко.\n\n- Прем'єрний показ \"Репродукції\" відбувся на Міжнародному кінофестивалі в Торонто (2017).",
                "link": "https://www.google.com"
        },
         {
            "title": "Кульки",
                "image": "images/film.jpeg",
                "year": "2018",
                "developer": "EA Games",
                "genre": "Екшн",
                "short_description": "Ну просто дуже класна гра!",
                "description": "Головний герой - видатний учений-біолог, що втратив в автокатастрофі свою сім'ю. Він одержимий бажанням повернути своїх близьких, виходячи за межі наукової етики і навіть самої природи.\n\nЦікаві факти про фільм \"Репродукція\":\n\n- Сюжет і сценарій кінороботи \"Репродукція\" створювалися під керівництвом кінокомпанії Кіану Рівза та Стівена Хемела Company Films.\n\n- З чуток,на одну з ролей розглядався Девід Стретхерн.\n\n- Зйомки фільму \"Репродукція\" проходили влітку 2016 року в Пуерто-Ріко.\n\n- Прем'єрний показ \"Репродукції\" відбувся на Міжнародному кінофестивалі в Торонто (2017).",
                "link": "https://www.google.com"
        }
        ]); */
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
                '            <li><a href = "songs.html?genre=Pop"><button type = "submit">Pop</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Рок"><button type = "submit">Рок</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Класика"><button type = "submit">Класика</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Джаз"><button type = "submit">Джаз</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Шансон"><button type = "submit">Шансон</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Club"><button type = "submit">Club</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Disco"><button type = "submit">Disco</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Metal"><button type = "submit">Metal</button></a></li>\n' +
                '            <li><a href = "songs.html?genre=Реп"><button type = "submit">Реп</button></a></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "col2">\n' +
                '        <div id = "film_list">'
            let i = 1;
            results.forEach(function(result){
                if (req.query.genre == undefined || result.genre.toLowerCase().includes(req.query.genre.toLowerCase()))
                {
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
                }
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
/*        db.collection('songs').insertMany(
            [
                {
                "singer": "Леша Свик",
                "title": "Светлофори",
                "image": "images/film.jpeg",
                "duration": "3:30",
                "song": "songs/song.mp3",
                "genre": "Pop"
            },
            {
                "singer": "Artik&Asti",
                "title": "Девочка танцуй",
                "image": "images/film.jpeg",
                "duration": "3:30",
                "song": "songs/song.mp3",
                "genre": "Джаз"
            },
            {
                "singer": "JONY, Andro",
                "title": "Мадам",
                "image": "images/film.jpeg",
                "duration": "3:30",
                "song": "songs/song.mp3",
                "genre": "Класика"
            },
             {
                "singer": "2Маши",
                "title": "Спасибо",
                "image": "images/film.jpeg",
                "duration": "3:30",
                "song": "songs/song.mp3",
                "genre": "Джаз"
            },
            {
                "singer": "Фогель",
                "title": "Бомба",
                "image": "images/film.jpeg",
                "duration": "3:30",
                "song": "songs/song.mp3",
                "genre": "Club"
            }
                ]); */


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
                '            <li><a href = "recipes.html?type=Супи"><button type = "submit">Супи</button></a></li>\n' +
                '            <li><a href = "recipes.html?type=Десерти"><button type = "submit">Десерти</button></a></li>\n' +
                '            <li><a href = "recipes.html?type=Закуски"><button type = "submit">Закуски</button></a></li>\n' +
                '            <li><a href = "recipes.html?type=Салати"><button type = "submit">Салати</button></a></li>\n' +
                '            <li><a href = "recipes.html?type=Основні страви"><button type = "submit">Основні страви</button></a></li>\n' +
                '            <li><a href = "recipes.html?type=Напої"><button type = "submit">Напої</button></a></li>\n' +
                '        </ul>\n' +
                '    </div>\n' +
                '    <div id = "list">\n' +
                '        <div id = "film_list">';
            let i = 1;
            results.forEach(function(result){
                if (req.query.type == undefined || result.type.toLowerCase().includes(req.query.type.toLowerCase()))
                {
                    out += '<div class = "recipe_item">';
                    out += '<a href ="recipe_info.html?recipeId=' + i + '"><img src = "' + result.image + '" id = "'+ i + '" onclick="selectRecipe(this.id)"}></a>';
                    out += '<p class = "recipe_title">' + result.title + '</p>';
                    out += '</div>';
                }
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

  /*      db.collection('recipes').insertMany([
            {
            "title": "Салат із редиски",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Закуски"
        },
        {
            "title": "Мафіни із курагою",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Десерти"
        },
        {
            "title": "Овочевий суп",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Супи"
        },
        {
            "title": "Закуска із баклажанів",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Закуски"
        },
        {
            "title": "Снікерс",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Десерти"
        },
         {
            "title": "Панакота",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Десерти"
        },
        {
            "title": "Курка в листковому тісті",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Основні страви"
        },
        {
            "title": "Егг-ног — молочний коктейль",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Напої"
        },
        {
            "title": "Окрошка на йогурті",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Супи"
        },
        {
            "title": "Тушкована свинина з молоком",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Основні страви"
        },
        {
            "title": "Смажені карасі у сметані",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Основні страви"
        },
        {
            "title": "М'ясний салат із фруктами",
                "image": "images/film.jpeg",
                "ingredients": "Молоко ТМ «Рудь»\t120 мл\nВершки, 35 %\t380 мл\nЖелатин\t10 г\nЦукор\t110 г\nВанільний цукор\t12 г\nМалина, перетерта з цукром, ТМ «Рудь»\t150 г\nЗаморожена полуниця ТМ «Рудь»\t100 г",
                "cooking": "Етап № 1\n\nЗамочуємо желатин згідно з інструкцією на пакуванні — висипаємо у невелику глибоку посудину, заливаємо необхідною кількістю води та залишаємо набухати.\n\nЕтап № 2\n\nКоли желатин достатньо збільшиться в об’ємі, його необхідно добре прогріти на маленькому вогні. Аж до повного розчинення у воді. Цей етап дуже важливий для приготування панакоти приємної однорідної консистенції.\n\nЕтап № 3\n\nМолоко змішуємо з вершками та ставимо на плиту підігріватися. Кип’ятити суміш не потрібно.\n\nЕтап № 4\n\nДодаємо до вершково-молочної суміші звичайний та ванільний цукор. Ретельно перемішуємо, доки кристалики повністю не розчиняться.\n\nЕтап № 5\n\nУ суміш вершків та молока тонким струменем наливаємо розчинений желатин. Щоб уникнути потрапляння в десерт крихітних грудочок, попередньо проціджуємо желатинову суміш через дрібне ситечко.\n\nОтриману масу розливаємо у силіконові формочки та залишаємо на три години в холодильнику для застигання.\n\nЕтап № 6\n\nПоки панакота застигає, приготуємо соус. Розморожуємо полуницю, викладаємо в блендер. Додаємо малину, перетерту з цукром, та збиваємо протягом трьох хвилин.\n\nЕтап № 7\n\nВиймаємо панакоту з формочок.\n\nМаленька хитрість: смакувати десертом краще не одразу з холодильника. Дайте панакоті годинку постояти за кімнатної температури. Так її смак ще краще розкриється, а консистенція стане більш м’якою та ніжною.\n\nЕтап № 8\n\nПоливаємо панакоту ягідним соусом. Прикрашаємо м’ятою, свіжими ягодами або шматочками фруктів.\n\nНасолоджуйтесь!",
                "type": "Закуски"
        }
        ]);*/
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