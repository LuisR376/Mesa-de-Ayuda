'use strict'
const express = require('express');
const router = express.Router();
const licenciasCrtl = require ('../controllers/licencias.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/get',fnGetLicencias);
router.post('/post', setLicencias);
router.post('/updatelicencias', upLicencias);
router.post('/deletelicencias', deleteLicencias);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetLicencias(req,res){
    licenciasCrtl.fnGetLicencias()
    .then(function (result){
        res.json(result);
    })
}

function setLicencias(req, res) {
    let datos = req.body;
    licenciasCrtl.setLicencias(datos)
        .then(function (result) {
            res.json(result);
        });
}

function upLicencias(req, res) {
    let datos = req.body;
    licenciasCrtl.upLicencias(datos)
        .then(function (result) {
            res.json(result);
        });
}


function deleteLicencias(req, res) {
    let datos = req.body;
    licenciasCrtl.deleteLicencias(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;