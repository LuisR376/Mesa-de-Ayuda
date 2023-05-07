'use strict'
const express = require('express');
const router = express.Router();
const serviciosCrtl = require ('../controllers/servicios.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetServicios);
router.post('/post', setServicios);
router.post('/updateServ',updateServicio);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetServicios(req,res){
    serviciosCrtl.fnGetServicios()
    .then(function (result){
        res.json(result);
    })
}

function setServicios(req, res) {
    let datos = req.body;
    serviciosCrtl.setServicios(datos)
        .then(function (result) {
            res.json(result);
        });
}

function updateServicio(req, res) {
    let datos = req.body;
    console.log("--------*******------------->",datos);
    serviciosCrtl.updateServicio(datos)
        .then(function (result) {
            res.json(result);
        });
}



module.exports = router;