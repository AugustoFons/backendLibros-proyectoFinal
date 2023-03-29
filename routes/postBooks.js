const express = require('express');
const router = express.Router();
const postBooksControllers = require('../controllers/postBooksController');

router.post('/', postBooksControllers.post)

module.exports = router