const Books = require('../models/books')

module.exports = {
    async post (req, res) {
        try {
            const item = new Books(req.body);
            await item.save();
            res.status(201).json(item)
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