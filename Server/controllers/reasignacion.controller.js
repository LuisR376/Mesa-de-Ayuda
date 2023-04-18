'use strict'
const reasignacionModels = require ('../models/reasignacion.model');
module.exports = {
    fnGetreasignacion: fnGetreasignacion,
    setreasignacion:setreasignacion
}

function fnGetreasignacion(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        reasignacionModels.fnGetreasignacion()
        .then(function(result){
            console.log("resultado del paso 2 reasignacion", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar reasignacion'}))
        })
    })
}
function setreasignacion(datos){
    return new Promise(function (resolve) {
        reasignacionModels.existidreasignacion(datos)
            .then(function (result) {
                console.log("👀",result.result[1])
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}