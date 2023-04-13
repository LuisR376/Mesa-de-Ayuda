'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetdiscoDuro: fnGetdiscoDuro,
    setDiscod:setDiscod,
    existDd:existDd
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetdiscoDuro(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM discoduro`
    )
}
function setDiscod(datos) {
    console.log("Funcion setDiscod",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM discoduro`
    ,datos)
}
function existDd(datos) {
    console.log("Funcion existDd",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setLugar(@ubicacion)`
    ,datos)
}