'use strict'
const V2Books = require('../models/books')

module.exports = {
    postComment (req, res) {
        let body = req.body;
        let error;
        let commentsT = JSON.parse(body.comments);

    
    commentsT.forEach(comment => {
        V2Books.findOneAndUpdate({_id: body._id }, {
            $push: {
                comments: {
                    'comment': comment
                }
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


        
    }
}
