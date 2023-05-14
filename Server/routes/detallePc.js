'use strict'
const express = require('express');
const router = express.Router();
const controllerDetalle = require ('../controllers/detallePc.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/detallePcget',fnGetDetallePc);
router.post('/post', setPc);
router.post('/postSetDetallepc', setdetallePc);
/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//
//Get == ver
function fnGetDetallePc(req, res){
    controllerDetalle.fnGetDetallePc()
    .then(function (result){
        res.json(result);
    })
}

//Set == Insertar
function setPc(req, res) {
    let datos = req.body;
    controllerDetalle.setPc(datos)
        .then(function (result) {
            res.json(result);
        });
}
function setdetallePc(req, res) {
    console.log(req.body);
    let datos = req.body;
    controllerDetalle.setdetallePc(datos)
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;