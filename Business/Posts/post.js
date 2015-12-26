class Post {
    private var _title;
    private var _content;
    private var _author;
    private var _tags;

    public get title() {
        return _title;
    }

    public get content() {
        return _content;
    }

    public get author() {
        return _author;
    }

    public get tags() {
        return _tags;
    }

    constructor(title, content, author, tags) {
        this._title = title;
        this._content = content;
        this._author = author;
        this._tags = tags;
    }
}

module.exports = Post;