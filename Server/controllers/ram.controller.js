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
            console.log("resultado de Ram", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ram'}))
        })
    })
}
function setRam(datos){
    return new Promise(function (resolve) {
        ramModels.existNomRam(datos)
            .then(function (result) {
                console.log("👀Ram",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}