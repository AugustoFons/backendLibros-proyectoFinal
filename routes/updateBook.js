const express = require('express');
const router = express.Router();
const updateBookController = require('../controllers/updateBookController');
const validarID = require('../middlewares/validarID')

router.put('/:id', validarID, updateBookController.update);

module.exports = router