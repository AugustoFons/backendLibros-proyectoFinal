const axios = require('axios');
const V2Books = require('../models/books')

exports.getApi = async (_, res) => {
    try {
        const getBooksApi = await (
            await axios(
                "http://localhost:3000/get"
            )
        ).data.map((e) => V2Books.create({
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
        console.log(getBooksApi)
        res.status(200).send(getBooksApi);
    } catch (error) {
        res.status(500).send(error);
    }
}


exports.getDb = async (_, res) => {
        try {
            const items = await V2Books.find()
            res.status(200).send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }

exports.getDbOneBook = async (req, res) => {
    const item = await V2Books.findById(req.params.id);
    res.json({item})
}

exports.searchBook = async (req, res) => {
    const item = await V2Books.findOne({title: req.params.title})
    res.json({item})
}