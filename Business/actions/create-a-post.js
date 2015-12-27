"use strict";
var Post = require("../Posts/post");
class CreatePostAction {
    toPost (postData) {
        return new Post(postData.title, postData.content, postData.author, postData.tags);
    }
    constructor(postService) {
        this.postService = postService;
    }

    execute(postData, callback) {
        let post = this.toPost(postData);
        this.postService.createPost(post, callback);
    }
}

module.exports = CreatePostAction;