'use strict'
const ddModels = require ('../models/discoduro.model');
module.exports = {
    fnGetdiscoDuro: fnGetdiscoDuro,
    setDd:setDd
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
function setDd(datos){
    return new Promise(function (resolve, reject) {
        ddModels.DiscoduroInsert(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function(error) {
                reject({ ok: false, error: error });
            });
    });
}