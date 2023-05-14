'use strict'
const accesorioModel = require ('../models/accesorio.model');
module.exports = {
    GetAccesorio,
    SetAccesorio
}

function GetAccesorio(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        accesorioModel.GetAccesorio()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Disco Duro'}))
        })
    })
}
function SetAccesorio(datos){
    return new Promise(function (resolve, reject) {
        accesorioModel.SetAccesorio(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function(error) {
                reject({ ok: false, error: error });
            });
    });
}