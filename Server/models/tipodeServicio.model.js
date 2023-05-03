'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetTipodeServicio: fnGetTipodeServicio,
    setTipodeServicio:setTipodeServicio,
    fnGetservicextra:fnGetservicextra,
    fnGetTipodeServicioDefault : fnGetTipodeServicioDefault
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetTipodeServicio(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipo_servicio`
    )
}
function fnGetservicextra(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipo_servicio WHERE Servicio_adicional = 1;`
    )
}
function setTipodeServicio(datos) {
    return helpers.mysqlQuery('POST', conn_mysql,
    `INSERT INTO tipo_servicio (Descripcion)VALUES(@Descripcion)`
    ,datos)
}


function fnGetTipodeServicioDefault(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM tipo_servicio where modalidad = 'Default`
    )
}
//`SELECT * FROM tipo_servicio where modalidad = 'Default'`