const Books = require('../models/books')
const {validationResult} = require('express-validator')

module.exports = {
    async update (req, res) {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                let updateBook = await Books.findByIdAndUpdate(req.params.id, req.body);
                res.status(200).json({
                    status: "success",
                    data: updateBook,
                })
            } else {
                res.json(err)
            }
        } catch (error) {
            res.status(404).send(error);
        }
    }
}