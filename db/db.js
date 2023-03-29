const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', false);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT)
        console.log('base de datos conectada')
    } catch {
        console.log('hubo algun problema al conectar la base de datos')    
    }
};

module.exports = {connect}