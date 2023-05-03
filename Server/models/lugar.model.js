'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetLugar: fnGetLugar,
    setLugar:setLugar,
    existNomLugar:existNomLugar
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetLugar(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM lugar`
    )
}
function setLugar(datos) {
   
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM lugar`
    ,datos)
}
function existNomLugar(datos) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setLugar(@ubicacion)`
    ,datos)
}