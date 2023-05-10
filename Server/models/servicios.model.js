'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetServicios: fnGetServicios,
    setServicios:setServicios,
    existNomServicios:existNomServicios,
    updateServicio : updateServicio
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetServicios(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT s.*, a.num_inventario FROM 
    servicios s,
    activos a
     WHERE 
     s.idactivos = a.idactivos;`
    )
}
function setServicios(datos) {
  
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT * FROM servicios`
    ,datos)
}
function existNomServicios(datos) {
    
    return helpers.mysqlQuery('GET', conn_mysql,
    `INSERT INTO servicios (idservicios,fecha_pedido,fecha_termino,idfolios,idtipo_servicio,descripcion,observaciones,idactivos,idlugar)
    VALUES (@idservicios,now(),@fecha_termino,@idfolios,@idtipo_servicio,@descripcion,@observaciones,@idactivos,@idlugar)`
    ,datos)
}


function updateServicio(datos) {
  console.log("idfolios updateServicio",datos);
    return helpers.mysqlQuery('GET', conn_mysql,
    `Update servicios  set  fecha_termino = now()  where idfolios = @idFolios`
    ,datos)
}

