const express = require('express');
const router = express.Router();
const V2Books = require('../models/books')


router.put('/postcomment/:id', async (req, res) => {
    const arrayId = req.params.arrayId;

    const comentarios = await V2Books.findOneAndUpdate(
        {
            "req.body._id": arrayId,
        },
        {
        $push: {
            "comments": req.body.comments,
        },
        }
        );
        if (comentarios) {
            res.send("Successful");
        } else {
            res.status(500).send("Not successful");
        }
});

module.exports = router