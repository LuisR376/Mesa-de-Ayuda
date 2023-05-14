'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetRam: fnGetRam,
    setRam: setRam,
    RamInsert: RamInsert

}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetRam(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM ram`
    )
}
function setRam(datos) {
   
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM ram`
    ,datos)
}
function RamInsert(datos) {
    console.log(datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `insert into ram(nombre, capacidad, marca) values (@nombre,@capacidad,@marca)`
    ,datos)
}