'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetActivos: fnGetActivos,
    agregaActivos: agregaActivos,
    nomEquipo: nomEquipo,
    fnactivosNumInventario: fnactivosNumInventario,
    updateActivo: updateActivo,
    updateActivoUbicacion: updateActivoUbicacion,
    updateDatosActivos: updateDatosActivos,
    updateMantenimientoActivos: updateMantenimientoActivos,
    fnGetActivosByid:fnGetActivosByid
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetActivos() {

    return helpers.mysqlQuery('GET', conn_mysql,
        `SELECT a.*, d.modelo,d.marca,d.num_serie, t.descripcion as tipo_activo_desc FROM 
    activos a,
    detallepc d,
    tipoactivo t
     WHERE 
     a.iddetallepc = d.iddetallepc and a.idtipoactivo = t.idtipoactivo;`
    )
}
function fnactivosNumInventario() {

    return helpers.mysqlQuery('GET', conn_mysql,
        `SELECT idactivos, num_inventario FROM activos`
    )
}
function agregaActivos(datos) {
    return helpers.mysqlQuery('POST', conn_mysql,
        // `INSERT INTO activos (idlugar,idarea,nombre_propietario, nombre_equipo, num_empleado, password, fecha_mantenimiento, valor_monetario, estado, descripcion, tipo_de_conexion, iddetallepc, idLicencias, idtipoactivo, host_teamviewer, password_teamviewer, calculoEstimado, Pertenencia) 
        // VALUES (@idlugar,@idarea,@nombre_propietario, @nombre_equipo, @num_empleado, @password, @fecha_mantenimiento, @valor_monetario, @estado, @descripcion, @tipo_de_conexion, @iddetallepc, @idLicencias, @idtipoactivo, @host_teamviewer, @password_teamviewer, @calculoEstimado, @Pertenencia)`
        `SELECT * FROM activos`
        , datos)
}

function nomEquipo(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
        ` call setActivo(@iddetallepc,@idtipoactivo,@Pertenencia)`, datos)
}

function updateActivo(datos) {
    console.log("datos", datos);
    return helpers.mysqlQuery('POST', conn_mysql,
        `UPDATE activos SET nombre_propietario = @nombre_propietario,num_empleado = @num_empleado,password = @password WHERE idactivos  = @idactivo;`, datos
    )
}
function updateActivoUbicacion(datos) {
    console.log("datos", datos);
    return helpers.mysqlQuery('POST', conn_mysql,
        `UPDATE activos SET idlugar = @idlugar, idarea = @idarea WHERE idactivos  = @idactivo;`, datos
    )
}

function updateDatosActivos(datos) {
    console.log("datos", datos);
    return helpers.mysqlQuery('POST', conn_mysql,
        `UPDATE activos SET nombre_equipo = @nombre_equipo, valor_monetario = @valor_monetario, estado = @estado, 
        descripcion = @descripcion, 
        tipo_de_conexion = @tipo_de_conexion,
        marca = @marca, 
        modelo = @modelo, 
        num_inventario = @num_inventario, 
        fecha_compra = now()
        WHERE idactivos  = @idactivo;`, datos

    )
}
function updateMantenimientoActivos(datos) {
    console.log("datos", datos);
    return helpers.mysqlQuery('POST', conn_mysql,
        `UPDATE activos SET fecha_mantenimiento = @fecha_mantenimiento, idLicencias = @idLicencias, host_teamviewer = @host_teamviewer, password_teamviewer = @password_teamviewer, calculoEstimado = @calculoEstimado WHERE idactivos  = @idactivo;`, datos

    )
}

function fnGetActivosByid(idactivos) {

    return helpers.mysqlQuery('GET', conn_mysql,
        `SELECT a.*, d.modelo,d.marca,d.num_serie, t.descripcion as tipo_activo_desc FROM 
    activos a,
    detallepc d,
    tipoactivo t
     WHERE 
     a.iddetallepc = d.iddetallepc and a.idtipoactivo = t.idtipoactivo;`,idactivos
    )
}