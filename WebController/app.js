"use strict";
var express = require('express');
var bodyParser = require('body-parser');
var PostService = require('../Business/Posts/post-service');
var Post = require('../Business/Posts/post');
var GetAllPostsAction = require('../Business/actions/get-all-posts');
var CreatePostAction = require('../Business/actions/create-a-post');
var MongoPostRepository = require('../Infracstructure/mongo-post-repository');

var app = express();
app.use(bodyParser.json());



var postService = new PostService(new MongoPostRepository('mongodb://localhost:27017/node-blog'));

var actions = {
    'getAllPosts': (data, callback) => new GetAllPostsAction(postService).execute(callback),
    'createPost': (postData, callback) => new CreatePostAction(postService).execute(postData, callback)
};

app.post('/node-blog/actions', (req, res) => {
    actions[req.body.action](req.body.data, function (err, response){
       res.send(response);
    });
});

app.listen(5000, () => console.log("running"));

