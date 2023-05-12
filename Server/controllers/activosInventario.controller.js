'use strict'
const activosModels = require ('../models/activosInventario.model');
module.exports = {
    fnGetActivos: fnGetActivos,
    agregaActivos : agregaActivos,
    fnactivosNumInventario:fnactivosNumInventario,
    activosPersonales : activosPersonales
}

function fnGetActivos(){
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        activosModels.fnGetActivos()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar activos'}))
        })
    })
}
function fnactivosNumInventario(){
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        activosModels.fnactivosNumInventario()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Tipo de Activos'}))
        })
    })
}
function agregaActivos(datos){
    return new Promise(function (resolve) {
        activosModels.nomEquipo(datos)
            .then(function (result) {
              
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Mensaje: result.result[0] });
                }
            });
    });
}
function activosPersonales(datos){
        return new Promise(function (resolve, reject) {
            activosModels.updateActivo(datos)
                .then(function (result) {
                    resolve({ ok: true, Error: result.result });
                })
                .catch(function(error) {
                    reject({ ok: false, error: error });
                });
        });
    }