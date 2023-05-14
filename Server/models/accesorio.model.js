'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    GetAccesorio,
    SetAccesorio

}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function GetAccesorio(){
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM accesorios`
    )
}

function SetAccesorio(datos) {
    console.log(datos);
    return helpers.mysqlQuery('POST', conn_mysql,
    `insert into accesorios(tipoaccesorio, serie, modelo, descripcion, status, idactivos) values (@tipoaccesorio, @serie, @modelo, @descripcion, @status, @idactivos)`
    ,datos)
}