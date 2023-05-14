'use strict'
const equipoModel = require ('../models/equipos.model');
module.exports = {
    getEquipos: getEquipos
}


function getEquipos(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        equipoModel.getEquipos()
        .then(function(result){
            console.log(result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar licencias'}))
        })
    })
}