"use strict";

class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    createPost(post) {
        this.postRepository.save(post)
    }

    getAllPosts (callback) {
        return this.postRepository.getAllPosts(callback )
    }
}

module.exports = PostService;