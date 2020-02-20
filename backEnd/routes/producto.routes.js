const express = require('express');
const routes = express.Router();

const productosClass = require('../controllers/productos.controllers');

routes.get('/:id', productosClass.getProducto);
routes.post('/', productosClass.addProducto);
routes.get('/', productosClass.getProductos);
routes.put('/:id', productosClass.UptProducto);
routes.delete('/:id', productosClass.DelProducto);

// routes.post('/', (req, resp)=>{

// });


module.exports = routes;