'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTicket: fnGetTicket,
    setTicket:setTicket,
    catalogEstatusTicket : catalogEstatusTicket,
    fnGetTicketByid: fnGetTicketByid,
    setTicketActualizado: setTicketActualizado,
    setTicketAbierto:setTicketAbierto
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTicket(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT t.*, u.nombre,f.num_folio,tip.descripcion, sta.Descripcion as estado_ticket,areas.nombre_area, lugares.ubicacion FROM 
    ticket t,
    usuarios u,
    folios f,
    tipo_servicio tip,
    statusticket sta,
    area areas,
    lugar lugares
     WHERE 
     t.idusuarios = u.idusuarios and  t.idfolios = f.idfolios and t.idtipo_servicio = tip.idtipo_servicio and
     t.idstatusTicket = sta.idstatusTicket and t.idarea = areas.idarea and t.idlugar = lugares.idlugar;`
    )
}
function setTicket(datos) {
   
    return helpers.mysqlQuery('POST', conn_mysql,
    `INSERT INTO ticket (idfolios,fecha_registro,idusuarios,idtipo_servicio , idlugar, idarea,asunto,mensaje,foto1,foto2,foto3,foto4,idstatusTicket)
    VALUES (@idfolios,now(),@idusuarios,@idtipo_servicio,@idlugar, @idarea,@asunto,@mensaje,@foto1,@foto2,@foto3,@foto4,1)`
    ,datos)
}
//call setTickets(@idfolios,@fecha_registro,@idusuarios,@idtipo_servicio,@asunto,@mensaje,@foto1,@foto2,@foto3,@foto4,@solucion,@firma,@estado_ticket,@idlugar,@idarea)
function catalogEstatusTicket(){
    return helpers.mysqlQuery('GET', conn_mysql,
    `select * from  statusticket`
    )
}
function setTicketActualizado(datos,idfolios) {
    
    return helpers.mysqlQuery('POST', conn_mysql,
    ` UPDATE ticket, folios SET ticket.numEmpl_Tecnicos = @numEmpl_Tecnicos, ticket.idtipo_servicio = @idtipo_servicio, ticket.idstatusticket = 2 WHERE ticket.idfolios = folios.idfolios AND ticket.idfolios = @idfolios;`, datos, idfolios);
}
function setTicketAbierto(datos) {
    return helpers.mysqlQuery('POST', conn_mysql,
    ` UPDATE ticket SET idstatusticket = @idstatusticket WHERE idticket = @ticket;`, datos);
}
function fnGetTicketByid(idFolios){
   
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT t.*, u.nombre,f.num_folio,tip.descripcion, sta.Descripcion as estado_ticket,areas.nombre_area, lugares.ubicacion FROM 
    ticket t,
    usuarios u,
    folios f,
    tipo_servicio tip,
    statusticket sta,
    area areas,
    lugar lugares
     WHERE 
     t.idusuarios = u.idusuarios and  t.idfolios = f.idfolios and t.idtipo_servicio = tip.idtipo_servicio and
     t.idstatusTicket = sta.idstatusTicket and t.idarea = areas.idarea and t.idlugar = lugares.idlugar and t.idfolios = @idFolios`, idFolios
    )
}