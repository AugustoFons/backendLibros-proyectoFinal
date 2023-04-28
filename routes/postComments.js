const express = require('express');
const router = express.Router();
const postCommentController = require('../controllers/postCommentController')

router.post('/:id', postCommentController.postComment );

module.exports = router

/* 
probar en postman con la forma 
{
    "comments": "comentario de prueba"
}
*/