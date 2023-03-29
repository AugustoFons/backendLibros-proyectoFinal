const Books = require('../models/books')

module.exports = {
    async update (req, res) {
        try {
            let updateBook = await Books.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({
                status: "success",
                data: updateBook,
            })
        } catch (error) {
            res.status(404).send(error);
        }
    }
}