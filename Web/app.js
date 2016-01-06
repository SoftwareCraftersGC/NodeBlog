var express = require('express');
var request = require('request');
var handlebars = require('express-handlebars');

var app = express();

app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + "/public"));
app.set('view engine', 'hbs');
app.engine('.hbs', handlebars({extname:'hbs'}));

app.get('/', (req, res) => {
    request({
            "url": 'http://localhost:5000/node-blog/actions',
            method: 'POST',
            json: {
                "action": 'getAllPosts'
            }
    }, function(error, response, body) {
        res.render("index", {"posts": body});
    });
});

app.listen(3000);