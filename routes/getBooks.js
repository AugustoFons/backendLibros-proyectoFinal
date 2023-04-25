const express = require('express');
const router = express.Router();
const getBooksController = require('../controllers/getBooksController')
const validarID = require('../middlewares/validarID')
const validarTitle = require('../middlewares/validarTitle')

/* router.get('/', getBooksController.getApi)
 */
router.get('/', getBooksController.getDb)
router.get('/:id', validarID, getBooksController.getDbOneBook)
router.get('/searchbook/:title', validarTitle, getBooksController.searchBook)

module.exports = router