const express = require('express');
const router = express.Router();
const updateBookController = require('../controllers/updateBookController');
const validarID = require('../middlewares/validarID')
const {check} = require('express-validator')

router.patch('/:id',[
    check('title').not().isEmpty().withMessage('El campo titulo es obligatorio')
], validarID, updateBookController.update);

module.exports = router