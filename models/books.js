const { Schema, model } = require('mongoose');

const newBook = new Schema ({
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
    }

});

const Books = model('Books', newBook);

module.exports = Books;