'use strict'
const lugarModels = require ('../models/lugar.model');
module.exports = {
    fnGetLugar: fnGetLugar,
    setLugar:setLugar
}

function fnGetLugar(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        lugarModels.fnGetLugar()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar lugar'}))
        })
    })
}
function setLugar(datos){
    return new Promise(function (resolve) {
        lugarModels.existNomLugar(datos)
            .then(function (result) {
                
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}