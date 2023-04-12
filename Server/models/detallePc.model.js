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
    console.log("Funcion existDetallePc",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM detallepc`
    ,datos)
}
function existDetallePc(datos) {
    console.log("Funcion existDetallePc",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setLugar(@ubicacion)`
    ,datos)
}