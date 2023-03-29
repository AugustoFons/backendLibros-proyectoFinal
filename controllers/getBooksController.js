const axios = require('axios');
const Books = require('../models/books')

exports.getApi = async (_, res) => {
    try {
        const getBooksApi = await (
            await axios(
                "http://www.etnassoft.com/api/v1/get/?category=libros_programacion&num_items=100&criteria=most_viewed"
            )
        ).data.map((e) => Books.create({
            id: e.id,
            title: e.title,
            author: e.author,
            content: e.content,
            content_short: e.content_short,
            publisher_date: e.publisher_date,
            language: e.language,
            cover: e.cover,
            url_download: e.url_download
        }))
        res.status(200).send(getBooksApi);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.getDb = async (_, res) => {
        try {
            const items = await Books.find()
            res.status(200).send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }

exports.getDbOneBook = async (req, res) => {
    const item = await Books.findById(req.params.id);
    res.json({item})
}

exports.searchBook = async (req, res) => {
    const item = await Books.findOne({title: req.params.title})
    res.json({item})
}