class PostService {
    constructor(postRepository) {
        this.postRepository = postRepository;
    }

    public createPost(post) {
        this.postRepository.save(post)
    }

    public getAllPosts () {
        return this.postRepository.getAllPosts()
    }
}