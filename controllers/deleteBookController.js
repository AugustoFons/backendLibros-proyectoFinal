const Books = require('../models/books')

module.exports = {
    async delete (req, res) {
        await Books.findByIdAndDelete(req.params.id);
        res.json({message: "Borrado con exito"})
    }
}