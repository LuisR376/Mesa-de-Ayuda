'use strict'
const express = require('express');
const router = express.Router();
const accesoriosCtrl = require('../controllers/accesorio.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getAccesorio', GetAccesorio);
router.post('/setAccesorio', SetAccesorio);


function GetAccesorio(req, res) {
    accesoriosCtrl.GetAccesorio()
        .then(function (result) {
            res.json(result);
        })
}


function SetAccesorio(req, res) {
    let datos =req.body;
    accesoriosCtrl.SetAccesorio(datos)
        .then(function (result) {
            res.json(result);
        })
}

module.exports = router;