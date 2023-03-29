const Books = require('../models/books')

module.exports = validarTitle = async (req, res, next) => {
    try {
        const item = await Books.findOne(req.params)
        if (item !== null) {
            next()
        } else {
            return res.status(501).json({msg:'Libro inexistente'})
        }
    } catch (error) {
        res.status(501).json(error)
    }
}