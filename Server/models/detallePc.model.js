'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetDetallePc: fnGetDetallePc,
    setPc:setPc,
    existDetallePc:existDetallePc
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
function existDetallePc(datos) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setDetallepc(@tipo_de_pc,@modelo,@num_serie,@folio_compra,@procesador,@iddiscoduro,@idram,@marca,@Sistema_Operativo,@idioma)`
    ,datos)
}