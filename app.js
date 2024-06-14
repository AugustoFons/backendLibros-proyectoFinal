const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const postBooksRouter = require('./routes/postBooks');
const getBooksRouter = require('./routes/getBooks');
const updateBookRouter = require('./routes/updateBook');
const deleteBookRouter = require('./routes/deleteBook')
const postCommentRouter = require('./routes/postComments');

const {connect} = require('./db/db');

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors());

app.use('/post', postBooksRouter);
app.use('/postcomment', postCommentRouter);
app.use('/get', getBooksRouter);
app.use('/update', updateBookRouter);
app.use('/delete', deleteBookRouter);

connect();

//mensaje inicial
app.get('/', (req, res) => {
    const urls = {
    getBooks: '/get',
    postBooks: '/post',
    postComments: '/postcomment',
    updateBook: '/update',
    deleteBook: '/delete',
    };
    res.json({
    saludo: 'Bienvenido a la API de LibrosP!',
    rutas: urls,
    });
});

module.exports = app;