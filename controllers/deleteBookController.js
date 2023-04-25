const V2Books = require('../models/books')

module.exports = {
    async delete (req, res) {
        await V2Books.findByIdAndDelete(req.params.id);
        res.json({message: "Borrado con exito"})
    }
}