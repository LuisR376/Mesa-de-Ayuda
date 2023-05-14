'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetDetallePc: fnGetDetallePc,
    setPc:setPc,
    existDetallePc:existDetallePc,
    ultimoidDetallePc:ultimoidDetallePc,
    setDetalleDisco : setDetalleDisco,
    setDetalleRam : setDetalleRam
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetDetallePc(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM detallepc`
    )
}
function setPc(datos) {
   
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM detallepc`
    ,datos)
}
function ultimoidDetallePc(datos) {
    console.log(datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setDetallesPc(@tipo_de_pc,@modelo,@num_serie,@folio_compra,@procesador,@marca,@Sistema_Operativo,@idioma)`
    ,datos)
}
function existDetallePc(datos) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setDetallepc(@tipo_de_pc,@modelo,@num_serie,@folio_compra,@procesador,@iddiscoduro,@idram,@marca,@Sistema_Operativo,@idioma)`
    ,datos)
}

function setDetalleDisco(datos) {
    console.log("setDetalleDiscosetDetalleDisco",datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `insert into detallepc_discoduro(iddetallepc, iddiscoduro) values (@iddetalle,@iddiscoduro )`
    ,datos)
}

function setDetalleRam(datos) {
    console.log("setDetalleRam",datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `insert into detallepc_ram(iddetallepc, idram) values (@iddetalle,@idram )`
    ,datos)
}


