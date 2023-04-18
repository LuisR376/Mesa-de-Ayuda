'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetreasignacion: fnGetreasignacion,
    setreasignacion:setreasignacion,
    existidreasignacion:existidreasignacion
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetreasignacion(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM asignacion`
    )
}
function setreasignacion(datos) {
    console.log("Funcion setreasignacion",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM asignacion`
    ,datos)
}
function existidreasignacion(datos) {
    console.log("Funcion existidreasignacion",datos)
    return helpers.mysqlQuery('GET', conn_mysql,
    `INSERT INTO asignacion ('',@descripcion,@idusuarios)VALUES(descripcion,idusuarios)`
    ,datos)
}