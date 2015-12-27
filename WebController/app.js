"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var actionsFactory = require('./Factories/actions-factory');

var app = express();
app.use(bodyParser.json());

var actions = {
    'getAllPosts': (data, callback) => actionsFactory.getAllPosts(callback),
    'createPost': (postData, callback) => actionsFactory.createPost(postData, callback)
};

app.post('/node-blog/actions', (req, res) => {
    actions[req.body.action](req.body.data, function (err, response){
       res.send(response);
    });
});

app.listen(5000, () => console.log("running"));

