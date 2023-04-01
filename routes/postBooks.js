const express = require('express');
const router = express.Router();
const postBooksControllers = require('../controllers/postBooksController');
const {check} = require('express-validator')

router.post('/',[
    check('title').not().isEmpty().withMessage('El campo titulo es obligatorio')
], postBooksControllers.post)

module.exports = router