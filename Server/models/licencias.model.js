'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnGetLicencias: fnGetLicencias,
    setLicencias: setLicencias,
    existNomLicen: existNomLicen,
    updateLicen:updateLicen,
    deleteLicencias : deleteLicencias
}
//
//crear una funcion de get usuarios que ara una peticion a la bd
function fnGetLicencias(){
    
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM licencias where estatus = 1`
    )
}
function setLicencias(){
    return helpers.mysqlQuery('POST',conn_mysql,
    `SELECT * FROM licencias`
    )
}
function existNomLicen(datos) {
    return helpers.mysqlQuery('GET', conn_mysql,
    `call setLicencias(@numserie_licencia,@tipo_licencia,@nombre,@folio_compra,@formato,@descripcion)`
    ,datos)
}
function updateLicen(datos){
    return helpers.mysqlQuery('POST',conn_mysql,
    `UPDATE licencias SET numserie_licencia = @numserie_licencia,tipo_licencia = @tipo_licencia,nombre = @nombre,folio_compra = @folio_compra, formato = @formato, descripcion = @descripcion WHERE idLicencias  = @idLicencias;`,datos
    )
}


function deleteLicencias(datos){
    console.log("deleteLicencias", datos)
    return helpers.mysqlQuery('POST',conn_mysql,
    `UPDATE licencias SET estatus = 0 WHERE idLicencias  = @idLicencias;`,datos
    )
}


