"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var Post = require('../Business/Posts/post');

var app = express();
app.use(bodyParser.json());


var posts = [new Post('Título', 'Contenido', 'Miguel', 'Hello')];
app.post('/node-blog/actions', (req, res) => {
    res.send(posts.map(p => p.title))
});

app.listen(5000, () => console.log("running"));
