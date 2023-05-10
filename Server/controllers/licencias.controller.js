'use strict'
const licenciasModels = require ('../models/licencias.model');
module.exports = {
    fnGetLicencias: fnGetLicencias,
    setLicencias: setLicencias,
    upLicencias:upLicencias,
    deleteLicencias : deleteLicencias
}

function fnGetLicencias(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        licenciasModels.fnGetLicencias()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar licencias'}))
        })
    })
}

function setLicencias(datos){
    return new Promise(function (resolve) {
        licenciasModels.existNomLicen(datos)
            .then(function (result) {
                
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}
function upLicencias(datos){
    return new Promise(function (resolve, reject) {
        licenciasModels.updateLicen(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function(error) {
                reject({ ok: false, error: error });
            });
    });
}

function deleteLicencias(datos){
    return new Promise(function (resolve, reject) {
        licenciasModels.deleteLicencias(datos)
            .then(function (result) {
                resolve({ ok: true, addenda: result.result });
            })
            .catch(function(error) {
                reject({ ok: false, error: error });
            });
    });
}

