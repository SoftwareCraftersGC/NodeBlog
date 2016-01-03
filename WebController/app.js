"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var actionsFactory = require('./Factories/actions-factory');
var handlebars = require('express-handlebars');
var path = require('path');
var app = express();
app.use(bodyParser.json());


console.log(path.isAbsolute('Factories'));

app.set('views', __dirname + '/../Web/views');
app.use('/public', express.static(__dirname + "/../Web/public"));
app.set('view engine', 'hbs');
app.engine('.hbs', handlebars({extname:'hbs'}));

var actions = {
    'getAllPosts': (data, callback) => actionsFactory.getAllPosts(callback),
    'createPost': (postData, callback) => actionsFactory.createPost(postData, callback)
};

app.post('/node-blog/actions', (req, res) => {
    actions[req.body.action](req.body.data, function (err, response){
       res.send(response);
    });
});

app.get('/', (req, res) => {
    actions['getAllPosts'](null, function (err, posts){
        res.render("index", {"posts": posts});
    });
});

app.listen(5000, () => console.log("running"));

