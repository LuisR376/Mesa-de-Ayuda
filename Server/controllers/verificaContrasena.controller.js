'use strict'
const fnModels = require ('../models/verificaContrasena.model');
const bcrypt = require('bcrypt-nodejs');
module.exports = {
    fnverificarFn:fnverificarFn
}
function fnverificarFn(datos){
    return new Promise(function (resolve) {
        console.log("datos",datos);
        fnModels.existNomFN(datos)
            .then(function (result) {
                console.log("consultta",result.result[0].password, "Front",datos.password);
                bcrypt.compare(datos.password, result.result[0].password, function (err, res) {
                    if (res == true) {
                        
                        resolve({ valido: 1, mensaje: 'Contraseña correcta' });
                    } else {
                        console.log("Mal");
                        resolve({ mensaje: 'Contraseña incorrecta', valido: 0})
                    }
                });
                
               
            });
    });
}