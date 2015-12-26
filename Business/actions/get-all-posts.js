"use strict";

class GetAllPostsAction {
    constructor(postService) {
        this.postService = postService;
    }

    execute() {
        return this.postService.getAllPosts();
    }
}

module.exports = GetAllPostsAction;