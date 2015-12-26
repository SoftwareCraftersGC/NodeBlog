var express = require('express');
var bodyParser = require('body-parser');
var PostService = require('../Business/Posts/post-service');
var Post = require('../Business/Posts/post');
var GetAllPostsAction = require('../Business/actions/get-all-posts');

var app = express();
app.use(bodyParser.json());

var postMemoryRepository = {
    posts: [new Post('Título', 'Contenido', 'Miguel', 'Hello')],
    getAllPosts: function () {
        return this.posts
    }
};

var postService = new PostService(postMemoryRepository);

var actions = {
    'getAllPosts': () => new GetAllPostsAction(postService).execute()
};

app.post('/node-blog/actions', (req, res) => {
    res.send(actions[req.body.action]())
});

app.listen(5000, () => console.log("running"));

