"use strict";

class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    createPost(post) {
        this.postRepository.save(post)
    }

    getAllPosts () {
        return this.postRepository.getAllPosts()
    }
}

module.exports = PostService;