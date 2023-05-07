'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnverificarFn:fnverificarFn,
    existNomFN:existNomFN,
    actualizaEstatusTicket : actualizaEstatusTicket
}

function fnverificarFn(datos) {
  
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM usuarios`
    ,datos)
}
function existNomFN(datos) {
    console.log("query",datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `Select * from usuarios where  idUsuarios = @idUsuario`
    ,datos)
}

function actualizaEstatusTicket(datos){
    return helpers.mysqlQuery('POST', conn_mysql,
    `update ticket set  idstatusticket = 5 where idticket = @idticket
    `
    ,datos)
}