'use strict'
const express = require('express');
const router = express.Router();
const activoCtrl = require('../controllers/activosInventario.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getActivos', fnGetActivos);
router.post('/postInventario', agregaActivos);
router.get('/numInventario', fnactivosNumInventario);

router.post('/datosPersonales', activosPersonales);
router.post('/datosUbicacion', activosUbicacion);
router.post('/activosDescripcion', activosDescripcion);
router.post('/liceYmanteActivos', activosManteimiento);

/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetActivos(req, res) {
    activoCtrl.fnGetActivos()
        .then(function (result) {
            res.json(result);
        })
}
function fnactivosNumInventario(req, res) {
    activoCtrl.fnactivosNumInventario()
        .then(function (result) {
            res.json(result);
        })
}
function agregaActivos(req, res) {
    let datos = req.body;
    activoCtrl.agregaActivos(datos)
        .then(function (result) {
            res.json(result);
        });
}
function activosPersonales(req, res) {
    let datos = req.body;
    activoCtrl.activosPersonales(datos)
        .then(function (result) {
            res.json(result);
        });
}

function activosUbicacion(req, res) {
    let datos = req.body;
    activoCtrl.activosUbicacion(datos)
        .then(function (result) {
            res.json(result);
        });
}
function activosDescripcion(req, res) {
    let datos = req.body;
    activoCtrl.activosDescripcion(datos)
        .then(function (result) {
            res.json(result);
        });
}

function activosManteimiento(req, res) {
    let datos = req.body;
    activoCtrl.activosManteimiento(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;