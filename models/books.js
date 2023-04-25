'use strict'

const { Schema, model } = require('mongoose');

const V2newBook = new Schema ({
    title: {
        type: String
    },
    author: {
        type: String
    },
    content: {
        type: String
    },
    content_short: {
        type: String
    },
    publisher_date: {
        type: String
    },
    language: {
        type: String
    },
    cover: {
        type: String
    },
    url_download: {
        type: String
    },
    comments: [
        { comment: {type: String} }
    ]

});

const V2Books = model('V2Books', V2newBook);

module.exports = V2Books;