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
  setTicketAbierto: setTicketAbierto,
    setTicketsolved:setTicketsolved,
  updateEstatusTerminado: updateEstatusTerminado,
    enviarCorreoTicket:enviarCorreoTicket
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
function setTicket(datos) {
  return new Promise(function (resolve) {
    fnGetTipodeServicioDefault().then(function (result) {
      datos.idtipo_servicio = result.addenda[0].idtipo_servicio;
      ticketModels
        .setTicket(datos)
        .then(function (result) {
          if (!result.err) {
            resolve({ ok: false, mensaje: 'Se agrego Correctamente' });
          } else if (
            result.err.errno === 1153 && // ER_NET_PACKET_TOO_LARGE
            result.err.code === 'ER_NET_PACKET_TOO_LARGE'
          ) {
            resolve({
              ok: false,
              mensaje: 'El paquete enviado excede el límite de tamaño',
            });
          } else {
            resolve({ ok: false, mensaje: result.err });
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
  return new Promise(function (resolve, reject) {
    ticketModels.setTicketActualizado(idFolios, datos)
      .then(function (result) {
        
        if (!result.err) {
          datos = result.result; // aquí guardamos el resultado de la actualización en el parámetro 'datos'
          resolve({ ok: true, mensaje: 'Se actualizó correctamente', addenda: datos });
        } 
      })
      .catch(function (error) {
        reject(error);
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
function setTicketsolved(datos) {
  return new Promise(function (resolve, reject) {
   console.log("CONTROLADOR",datos);
    ticketModels.setTicketsolved(datos)
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


function updateEstatusTerminado(datos) {
  return new Promise(function (resolve, reject) {
   console.log("updateEstatusTerminado",datos);
    ticketModels.updateEstatusTerminado(datos)
      .then(function (result) {
        if (!result.err) {
          resolve({ ok: true, mensaje: 'El ticket a pasado a estatus terminado' });
        }
      })
      .catch(function (error) {
        reject(error);
      });
  });
}
async function enviarCorreoTicket() {
    try {
        const correosServicio = await ticketModels.fnObtenerCorreos(); //se puede optener el usuario por id de usuario que levanto el ticket
        if (!correosServicio.err) {
            let informacionCorreo = correosServicio.result[0];
            console.log("lelgo")
            const enviarCorreo = await Promise.each(informacionCorreo, function (key) {
                fnEnviarCorreoTicketEspera.RowDataPacket[0](key)
            }).then(function (result) {
                return ({ mensaje: 'Correos enviados con exito.', ok: true });
            })
            return enviarCorreo;

        } else {
            return ({ ok: false, mensaje: 'Error No se ha podido obtener los tickets' });
        }
    } catch (err) {
        return ({ ok: false, mensaje: 'Error grave al enviar correos' });
    }
}
function fnEnviarCorreoTicketEspera(datos) {
    return new Promise(function (resolve, reject) {
        console.log("fnEnviarCorreoTicketEspera", datos)
        datos.correo = datos.client_correo;
        var html = fs.readFileSync(path.resolve(__dirname, '../email/correoGraciasPreferencia.html'), 'utf8');
        let subjet = 'Titulo del Mensaje o pie de pagina';
      html = html.replace("{{ numEmpl_Tecnicos }}", datos.numEmpl_Tecnicos);
      html = html.replace("{{ asunto }}", datos.asunto);
       html = html.replace("{{ mensaje }}", datos.mensaje);
        nodemailer.enviarMail(datos.correo, html, subjet);

        resolve({ ok: true, mensaje: 'El mensaje se ha enviado correctamente' });
    })
}
