var PostService = require('../../Business/Posts/post-service');
var GetAllPostsAction = require('../../Business/actions/get-all-posts');
var CreatePostAction = require('../../Business/actions/create-a-post');
var MongoPostRepository = require('../../Infracstructure/mongo-post-repository');

var postService = new PostService(new MongoPostRepository('mongodb://localhost:27017/node-blog'));
var getAllPostsAction = new GetAllPostsAction(postService);
var createPostAction = new CreatePostAction(postService);

function getAllPosts(callback) {
    return getAllPostsAction.execute(callback)
}

function createPost(postData, callback) {
    return createPostAction.execute(postData, callback)
}

module.exports = {
    getAllPosts: getAllPosts,
    createPost: createPost
};