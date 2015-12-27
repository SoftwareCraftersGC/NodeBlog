"use strict";

class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    createPost(post, callback) {
        this.postRepository.save(post, callback)
    }

    getAllPosts (callback) {
        return this.postRepository.getAllPosts(callback )
    }
}

module.exports = PostService;