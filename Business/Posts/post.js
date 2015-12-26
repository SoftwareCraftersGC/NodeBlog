"use strict";

class Post {
    constructor(title, content, author, tags) {
        this._title = title;
        this._content = content;
        this._author = author;
        this._tags = tags;
    }

    get title() {
        return this._title;
    }

    get content() {
        return this._content;
    }

    get author() {
        return this._author;
    }

    get tags() {
        return this._tags;
    }
}

module.exports = Post;