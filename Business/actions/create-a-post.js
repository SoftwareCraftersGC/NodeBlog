"use strict";
var Post = require("../Posts/post");
class CreatePostAction {
    toPost (postData) {
        return new Post(postData.title, postData.content, postData.author, postData.tags);
    }
    constructor(postService) {
        this.postService = postService;
    }

    execute(postData) {
        let post = this.toPost(postData);
        this.postService.createPost(post);
    }
}

module.exports = CreatePostAction;