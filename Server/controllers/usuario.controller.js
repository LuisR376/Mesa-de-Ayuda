'use strict'
const usuarioModels = require ('../models/usuario.model');

module.exports = {
    fnGetUsuario: fnGetUsuario,
    setUsuario:setUsuario,
    actualizarUsuario:actualizarUsuario
}

function fnGetUsuario(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        usuarioModels.fnGetUsuario()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar usuario'}))
        })
    })
}
function setUsuario(datos){
    return new Promise(function (resolve) {
        usuarioModels.existNomUsuario(datos)
            .then(function (result) {
                console.log("😎", result);
                if (result.result[1]) {
                    resolve({ ok: false, error: 'Ya Existe' });
                } else {
                    resolve({ ok: true, Error: result.result[0] });
                }
            });
    });
}
function actualizarUsuario(datos) {
    const id = datos.id;
    const datosActualizados = datos.datosActualizados;
  
    return new Promise((resolve, reject) => {
        usuarioModels.findByIdAndUpdate(id, datosActualizados, { new: true })
        .then((usuarioActualizado) => {
            console.log("Pasoooooo2 Usuario Actualizado", usuarioActualizado);
          resolve(usuarioActualizado);
        })
        .catch((error) => {
          console.error(error);
          reject({ mensaje: 'Error al actualizar el usuario' });
        });
    });
  }


