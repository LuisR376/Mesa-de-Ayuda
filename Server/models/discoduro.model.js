'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetdiscoDuro: fnGetdiscoDuro,
    DiscoduroInsert:DiscoduroInsert
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetdiscoDuro(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM discoduro`
    )
}
function DiscoduroInsert(datos) {
    console.log(datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `insert into discoduro(cap_almacenamiento, tecnologia_M_S, marca) values (@cap_almacenamiento,@tecnologia_M_S,@marca)`
    ,datos)
}