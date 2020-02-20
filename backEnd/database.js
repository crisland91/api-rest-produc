const mongoose = require('mongoose');

const url_data_base = 'mongodb://localhost:27017/productoDB';

mongoose.connect(url_data_base)
    .then(db => console.log('conectado a la base de datos'))
    .catch(err => console.log(err));

module.exports = mongoose;
