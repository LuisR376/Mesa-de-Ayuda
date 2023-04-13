'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    fnSetFolio
}

function fnSetFolio(datos){
    return helpers.mysqlQuery('GET',conn_mysql,
    `call setFolio(@num_folio)`
    ,datos)
}