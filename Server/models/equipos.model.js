'use strict'
const helpers = require('../modules/helpers');
module.exports = {
    getEquipos : getEquipos
}
//

function getEquipos(){
    return helpers.mysqlQuery('GET',conn_mysql,
    `SELECT * FROM cat_equipos `
    )
}
