'use strict'
const express = require('express');
const router = express.Router();
const controllerDetalle = require ('../controllers/detallePc.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/detallePcget',fnGetDetallePc);
router.post('/post', setPc);

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

module.exports = router;