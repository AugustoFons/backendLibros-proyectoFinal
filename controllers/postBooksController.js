const V2Books = require('../models/books')
const {validationResult} = require('express-validator')

module.exports = {
    async post (req, res) {
        try {
            const err = validationResult(req)
            if (err.isEmpty()) {
                const item = new V2Books(req.body);
                await item.save();
                res.status(201).json(item)
            } else {
                res.status(501).json(err)
            }
        } catch (error) {
            res.status(401).json(error)
        }
    }
/*     async post (req, res) {
        try {
            const { title, author, content, content_short, publisher_date, language, cover, url_download} = req.body
            let newBook = await Books.create({
                title,
                author,
                content,
                content_short,
                publisher_date,
                language,
                cover,
                url_download
            })
            res.status(201).json({
                status: "success",
                data: newBook,
            });
        } catch (error) {
            res.status(404).send(error);
        }
    } */
}