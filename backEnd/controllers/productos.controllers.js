const modelProducto = require('../models/productos');
const productosCtrl = {};

productosCtrl.getProducto = async (req, resp)=>{
    //console.log(req.params);
    const idProd = await modelProducto.findById(req.params.id);
    resp.json(idProd);

};

productosCtrl.getProductos = async (req, resp)=>{
    const prod = await modelProducto.find();
    resp.json(prod);
    
};

productosCtrl.addProducto = async (req, resp) =>{
    const addProd = await new modelProducto(req.body);
    //console.log(addProd);
    await addProd.save();
    
    resp.json({status: 'producto insertado'});
};

productosCtrl.UptProducto = async (req, resp) =>{
    const { id } = await req.params;
    const uptProd = {
        "descripcion":req.body.descripcion,
        "precio":req.body.precio,
        "cantidad":req.body.cantidad
    };
    //console.log(uptProd);
     await modelProducto.findByIdAndUpdate(id, {$set: uptProd});
     resp.json({
         status:"producto modificado"
     });
};

productosCtrl.DelProducto = async (req, resp) =>{
   
    await modelProducto.findByIdAndRemove(req.params.id)
    resp.json({
        status:"producto eliminado"
    });
};

module.exports = productosCtrl;