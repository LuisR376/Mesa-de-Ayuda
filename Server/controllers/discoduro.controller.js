'use strict'
const ddModels = require ('../models/discoduro.model');
module.exports = {
    fnGetdiscoDuro: fnGetdiscoDuro,
    setDiscod:setDiscod
}

function fnGetdiscoDuro(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        ddModels.fnGetdiscoDuro()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Disco Duro'}))
        })
    })
}
function setDiscod(datos){
    return new Promise(function (resolve) {
        ddModels.existDd(datos)
            .then(function (result) {
                
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}