const express = require('express');
const router = express.Router();
const V2Books = require('../models/books')
const postCommentController = require('../controllers/postCommentController');

router.post('/', (req, res) => {
    let body = req.body;
    let error;
    let comments = JSON.parse(req.body.comments);

    comments.forEach(comment => {
        V2Books.update( {_id: req.body._id }, {
            $push: {
                'comments': {
                    comment: comment
                }
            }
        },
        (error) => {
            if(error){
                error = error
            }
        }
        )
    });
    if(error){
        return res.json({
            success: false,
            msg: 'No se pudo agregar el comentario',
            error
        })
    } else {
        return res.json({
            success: true,
            msg: 'Se agrego el comentario'
        })
    }
})

module.exports = router