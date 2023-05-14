'use strict'
const ramModels = require ('../models/ram.model');
module.exports = {
    fnGetRam: fnGetRam,
    setRam:setRam
}

function fnGetRam(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        ramModels.fnGetRam()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ram'}))
        })
    })
}
function setRam(datos){
    return new Promise(function (resolve, reject) {
        ramModels.RamInsert(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function(error) {
                reject({ ok: false, error: error });
            });
    });
}