"use strict";

class GetAllPostsAction {
    constructor(postService) {
        this.postService = postService;
    }

    execute(callback) {
        return this.postService.getAllPosts(callback);
    }
}

module.exports = GetAllPostsAction;