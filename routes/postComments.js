'use strict';
const express = require('express');
const router = express.Router();
const V2Books = require('../models/books')
const postCommentController = require('../controllers/postCommentController');

router.post('/postcomment', (req, res) => {
        V2Books.update({_id: req.body._id}, {
            $push: {
                'comments': {
                    comment: req.body.comment
                }
            }
        },
        function(error) {
            if (error) {
                return res.json({
                    success: false,
                    msj: 'No se pudo agregar el comentario',
                    err
                });
            } else {
                return res.json({
                    success: true,
                    msj: 'Se agregó correctamente el comentario'
                });
            }
        }
        )

    /* let body = req.body;
    let error;
    let commentsT = JSON.parse(body.comments);

    
    commentsT.forEach(comment => {
        V2Books.update({_id: body._id }, {
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
    } */
})

module.exports = router