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
        this.db.collection('postCollection').find({}).toArray(function (err, posts) {
            if (err) {
                callback(err);
            } else {
                callback(null, posts);
            }
            this.db.close();
        });
    }

    save(post, callback) {
        this.db.collection('postCollection').insert(post, {w:1}, function(err, records) {
            console.log();
            callback(err, `${records.insertedIds[0]} created`);
        })
    }
}

module.exports = MongoPostRepository;