'use strict'
const serviciosModels = require ('../models/servicios.model');
module.exports = {
    fnGetServicios: fnGetServicios,
    setServicios:setServicios
}

function fnGetServicios(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        serviciosModels.fnGetServicios()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Servicios'}))
        })
    })
}
function setServicios(datos){
    return new Promise(function (resolve) {
        serviciosModels.existNomServicios(datos)
            .then(function (result) {
                
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}