'use strict'
const FolioModels = require ('../models/folio.model');
const uuid = require('uuid');
module.exports = {
    fnSetFolio
    
}

function fnSetFolio(){
    return new Promise(function(resolve , reject){
        var filename = uuid.v4();
        let datos = { num_folio : filename};
        FolioModels.fnSetFolio(datos) //Consultando a la BD
        .then(function (result) {
            if (!result.err) {
                resolve({ valido: 1, mensaje: 'Se ha creado el folio correctamente' , addenda:result.result[0]});
            } else {
                reject({ valido: 0, mensaje: 'Error en crear un folio' });
            }
        })
    })
}