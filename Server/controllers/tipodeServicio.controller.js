'use strict'
const tipodeServicioModels = require ('../models/tipodeServicio.model');
module.exports = {
    fnGetTipodeServicio: fnGetTipodeServicio,
    setTipodeServicio:setTipodeServicio,
    fnGetservicextra:fnGetservicextra
}

function fnGetTipodeServicio(){
    return new Promise (function(resolve,reject){
        tipodeServicioModels.fnGetTipodeServicio()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar el tipo de servicio'}))
        })
    })
}
function fnGetservicextra(){
    return new Promise (function(resolve,reject){
        tipodeServicioModels.fnGetservicextra()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar el tipo de servicio'}))
        })
    })
}
function setTipodeServicio(datos){
    return new Promise(function (resolve) {
        tipodeServicioModels.setTipodeServicio(datos)
            .then(function (result) {
                if (!result.err) {
                    resolve({ ok: false, mensaje: 'Se agrego Correctamente' });
                }
            });
    });
}