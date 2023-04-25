const V2Books = require('../models/books')

module.exports = validarID = async (req, res, next) => {
    try {
        const item = await V2Books.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            return res.status(501).json({msg:'El ID es invalido'})
        }
    } catch (error) {
        res.status(501).json(error)
    }
}