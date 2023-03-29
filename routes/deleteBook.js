const express = require('express');
const router = express.Router();
const deleteBookController = require('../controllers/deleteBookController');
const validarID = require('../middlewares/validarID')

router.delete('/:id', validarID, deleteBookController.delete)

module.exports = router