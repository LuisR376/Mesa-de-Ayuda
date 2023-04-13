'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetRam: fnGetRam,
    setRam: setRam,
    existNomRam: existNomRam

}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetRam(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM ram`
    )
}
function setRam(datos) {
    console.log("Funcion setRam",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM ram`
    ,datos)
}
function existNomRam(datos) {
    console.log("Funcion existNomRam",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setRol(@descripcion_rol)`
    ,datos)
}