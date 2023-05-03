'use strict'
const detallePcModels = require ('../models/detallePc.model');
module.exports = {
    fnGetDetallePc: fnGetDetallePc,
    setPc:setPc
}

function fnGetDetallePc(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        detallePcModels.fnGetDetallePc()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar DetallePc'}))
        })
    })
}
function setPc(datos){
    return new Promise(function (resolve) {
        detallePcModels.existDetallePc(datos)
            .then(function (result) {
                
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}