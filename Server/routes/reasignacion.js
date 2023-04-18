'use strict'
const express = require('express');
const router = express.Router();
const reasignacionCrtl = require ('../controllers/reasignacion.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/Getreasignacion',fnGetreasignacion);
router.post('/post', setreasignacion);

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetreasignacion(req,res){
    reasignacionCrtl.fnGetreasignacion()
    .then(function (result){
        res.json(result);
    })
}
function setreasignacion(req, res) {
    let datos = req.body;
    reasignacionCrtl.setreasignacion(datos)
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;