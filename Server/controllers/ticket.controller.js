'use strict'
const { reject } = require('bluebird');
const ticketModels = require ('../models/ticket.model');
const tipoServicioModel = require ('../models/tipodeServicio.model');

module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket,
    catalogEstatusTicket : catalogEstatusTicket
}

function fnGetTicket(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        ticketModels.fnGetTicket()
        .then(function(result){
            console.log("resultado del paso 2", result)
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ticket'}))
        })
    })
}
function setTicket(datos){
    return new Promise(function (resolve) {
       fnGetTipodeServicioDefault().then(function(result){
        console.log("obten datos tipos de servicio default", result.addenda[0].idtipo_servicio)
        datos.idtipo_servicio = result.addenda[0].idtipo_servicio;
        ticketModels.setTicket(datos)
        .then(function (result) {
            console.log("👀",result)
            if (!result.err) {
                resolve({ ok: false, mensaje: 'Se agrego Correctamente' });
            }
        });
       });
        
    });
}


function fnGetTipodeServicioDefault(){
    return new Promise(function (resolve) {
        tipoServicioModel.fnGetTipodeServicioDefault()
            .then(function (result) {
                console.log("👀",result)
                if (!result.err) {
                    resolve({ ok: false, mensaje: 'Se agrego Correctamente' ,addenda:result.result});
                
                }
            });
    });
}



function catalogEstatusTicket(){
    return new Promise(function (resolve){
        ticketModels.catalogEstatusTicket()
        .then(function(result){
            if (!result.err) {
                resolve({ ok: false, mensaje: 'Catalogo de estatus ticket' ,  addenda:result.result});
            
            }else{
                reject({ ok : false , mensaje : "error al obtener catalogos"});
            }
        })
    })
}