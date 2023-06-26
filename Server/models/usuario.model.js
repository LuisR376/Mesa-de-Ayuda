'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetUsuario: fnGetUsuario,
    fnGetTecnicos:fnGetTecnicos,
    setUsuario:setUsuario,
    existNomUsuario:existNomUsuario,
    findByIdAndUpdate: findByIdAndUpdate,
    obtenClientePorCorreo : obtenClientePorCorreo
    }

//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetUsuario(){
    return helpers.mysqlQuery('GET',conn_mysql,`SELECT * FROM usuarios`)
}
function fnGetTecnicos(){
    return helpers.mysqlQuery('GET',conn_mysql,`SELECT idusuarios, nombre, num_empleado FROM usuarios WHERE idrol = 2;`)
}
function setUsuario(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `SELECT u.*, a.nombre_area, l.ubicacion, r.descripcion_rol FROM 
    usuarios u,
    area a,
    lugar l,
    rol r
     WHERE 
     u.idarea = a.idarea and
     u.idlugar = l.idlugar and
     u.idrol = r.idrol;`
    ,datos)
}
function existNomUsuario(datos) {
   
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setUsuarios(@idrol,@num_empleado,@nombre,@apellidoP,@apellidoM,@idlugar,@idarea,@email,@password,@status)`
    ,datos)
}
function findByIdAndUpdate(id, datos) {
    // Código para actualizar un usuario por su ID 
    const query = 'UPDATE `usuarios` SET `fecha`        = ?, `idrol`        = ?, `num_empleado` = ?, `nombre`       = ?, `apellidoP`    =?, `apellidoM`    =?, `idlugar`      =?, `idarea`       =?, `email`        =?, `password`     =?, `status`       =?  WHERE `id` =?'

    return helpers.mysqlQuery('PUT', conn_mysql, query)
    .then((resultado) => {
     
      return resultado;
    })
}
  
function obtenClientePorCorreo(client_correo) {
    return helpers.mysqlQuery('GET', conn_mysql,
                ` call getusuarioporRol(@email);`
        , client_correo)
}