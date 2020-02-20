const express = require('express');
const app = express();
const { Mongoose } = require('./database');
const cors = require('cors');


/* Settings */
app.set('port', process.env.PORT || 4500);


/* midlewares */
app.use(express.json());

/* routes */
app.use( '/producto/', require('./routes/producto.routes'));



// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
//    next();
//   });

    
//Iniciando el servidor
app.listen(app.get('port'), ()=>{
    console.log('Api rest iniciado en el puerto: ', + app.get('port') );
});