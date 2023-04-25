'use strict'
const V2Books = require('../models/books')

module.exports = {
    async postComment (req, res) {
        let body = req.body;
        let error;
        let comments = JSON.parse(body.comments)

        await comments.forEach(comment => {
            V2Books.update({_id: body._id},{
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
        })
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
    }
}
