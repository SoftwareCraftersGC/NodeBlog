"use strict";
var MongoClient = require('mongodb').MongoClient;

class MongoPostRepository {
    constructor(connection) {
        this.db = null;
        MongoClient.connect(connection, (err, dbConnection) =>
            this.db = dbConnection
        );
    }

    getAllPosts(callback) {
        var posts = [];
        var cursor = this.db.collection('postCollection').find( );
        cursor.each((err, doc) => {
            if (err) callback(err);
            if (doc!=null) posts.push(doc);
            else {
                this.db.close();
                callback(null, posts);
            }
            posts.push(doc);

        });
    }
}

module.exports = MongoPostRepository;