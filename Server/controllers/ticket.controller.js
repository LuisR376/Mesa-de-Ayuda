'use strict'
const { reject } = require('bluebird');
const ticketModels = require ('../models/ticket.model');
const tipoServicioModel = require ('../models/tipodeServicio.model');
const { log } = require('console');

module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket,
    catalogEstatusTicket : catalogEstatusTicket,
    fnGetTicketByid: fnGetTicketByid,
    setTicketActualizado: setTicketActualizado,
    setTicketAbierto: setTicketAbierto
}
function fnGetTicketByid(idFolios){
    
    return new Promise (function(resolve,reject){
        ticketModels.fnGetTicketByid(idFolios)
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ticket'}))
        })
    })
}

function fnGetTicket(){
    //
    //Una promesa dice: que debe esperar a terminar la funcion para iniciar el siguiente paso
    return new Promise (function(resolve,reject){
        ticketModels.fnGetTicket()
        .then(function(result){
            
            resolve(!result.err ? {ok:true, addenda:result.result}: reject({ok:false, error:'Error al consultar Ticket'}))
        })
    })
}
function setTicket(datos){
    return new Promise(function (resolve) {
       fnGetTipodeServicioDefault().then(function(result){
        
        datos.idtipo_servicio = result.addenda[0].idtipo_servicio;
        ticketModels.setTicket(datos)
        .then(function (result) {
           
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
                
                if (!result.err) {
                    resolve({ ok: false, mensaje: 'Se agrego Correctamente' ,addenda:result.result});
                
                }
            });
    });
}
function setTicketActualizado(idFolios, datos) {
    
  return new Promise(function (resolve) {
    ticketModels.setTicketActualizado(idFolios, datos)
      .then(function (result) {
        
        if (!result.err) {
          datos = result.result; // aquí guardamos el resultado de la actualización en el parámetro 'datos'
          resolve({ ok: true, mensaje: 'Se actualizó correctamente', addenda: datos });
        } else {
          resolve({ ok: false, mensaje: 'No se pudo actualizar', addenda: null });
        }
      });
  });
}
function setTicketAbierto(datos) {
  return new Promise(function (resolve, reject) {
   
    ticketModels.setTicketAbierto(datos)
      .then(function (result) {
        if (!result.err) {
          resolve({ ok: false, mensaje: 'Se agrego Correctamente' });
        }
      })
      .catch(function (error) {
        reject(error);
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