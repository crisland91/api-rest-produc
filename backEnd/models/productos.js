const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema_emp = new Schema({
    descripcion: {type:String, required:true},
    precio: {type:Number, required:true},
    cantidad: {type:Number, required:true}
});

module.exports = mongoose.model('productos', schema_emp);