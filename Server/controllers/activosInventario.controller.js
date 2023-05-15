'use strict'
const activosModels = require('../models/activosInventario.model');
const moment = require('moment');
module.exports = {
    fnGetActivos: fnGetActivos,
    agregaActivos: agregaActivos,
    fnactivosNumInventario: fnactivosNumInventario,
    activosPersonales: activosPersonales,
    activosUbicacion: activosUbicacion,
    activosDescripcion: activosDescripcion,
    activosManteimiento: activosManteimiento,
    fnGetActivosByid:fnGetActivosByid
}

function fnGetActivos() {
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise(function (resolve, reject) {
        activosModels.fnGetActivos()
            .then(function (result) {

                resolve(!result.err ? { ok: true, addenda: result.result } : reject({ ok: false, error: 'Error al consultar activos' }))
            })
    })
}
function fnactivosNumInventario() {
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise(function (resolve, reject) {
        activosModels.fnactivosNumInventario()
            .then(function (result) {

                resolve(!result.err ? { ok: true, addenda: result.result } : reject({ ok: false, error: 'Error al consultar Tipo de Activos' }))
            })
    })
}
function agregaActivos(datos) {
    return new Promise(function (resolve) {
        if (!datos.iddetallepc) {
            datos.iddetallepc = null;
            console.log("datosxXXXX", datos.iddetallepc);
        }
        activosModels.nomEquipo(datos)
            .then(function (result) {
                let idactivos = JSON.parse(JSON.stringify(result.result[0]))
                let idactivo = {
                    idactivo: idactivos[0].ultimoId
                }
                resolve({ ok: true, addenda: idactivo });
            });
    });
}
function activosPersonales(datos) {
    return new Promise(function (resolve, reject) {
        activosModels.updateActivo(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function (error) {
                reject({ ok: false, error: error });
            });
    });
}
function activosUbicacion(datos) {
    return new Promise(function (resolve, reject) {
        activosModels.updateActivoUbicacion(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function (error) {
                reject({ ok: false, error: error });
            });
    });
}
function activosDescripcion(datos) {
    return new Promise(function (resolve, reject) {
        activosModels.updateDatosActivos(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function (error) {
                reject({ ok: false, error: error });
            });
    });
}

function activosManteimiento(datos) {
    return new Promise(function (resolve, reject) {
         let fecha1 = datos.fecha_mantenimiento =  moment(  datos.fecha_mantenimiento );
         let fecha2= datos.calculoEstimado = moment(  datos.calculoEstimado );
         console.log("datos.calculoEstimado",datos.calculoEstimado);
        const diferenciaDias = fecha2.diff(fecha1 , 'days');
        datos.calculoEstimado   =  diferenciaDias;
        datos.fecha_mantenimiento =  moment(  datos.fecha_mantenimiento ).format('YYYY-MM-DD');
        console.log("Calculo dias", datos)
        activosModels.updateMantenimientoActivos(datos)
            .then(function (result) {
                resolve({ ok: true, Error: result.result });
            })
            .catch(function (error) {
                reject({ ok: false, error: error });
            });
    });
    
}
function fnGetActivosByid(idactivos){
    
    return new Promise (function(resolve,reject){
        activosModels.fnGetActivosByid(idactivos)
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar idactivos'}))
        })
    })
}