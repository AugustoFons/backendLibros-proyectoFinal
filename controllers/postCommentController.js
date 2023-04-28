const V2Books = require('../models/books')

module.exports = {
    async postComment (req, res) {
        try {
            if (req.params.id) {
                let updateBook = await V2Books.findByIdAndUpdate(req.params.id, {$push: {
                    "comments": req.body.comments,
                }});
                res.status(200).json({
                    status: "success",
                })
            } else {
                res.json(err)
            }
        } catch (error) {
            res.status(404).send(error);
        }
    }
}
