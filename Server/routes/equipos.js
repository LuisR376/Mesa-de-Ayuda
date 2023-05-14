'use strict'
const express = require('express');
const router = express.Router();
const equioCtrl = require ('../controllers/equipos.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */

router.get('/getEquipos', getEquipos);


function getEquipos(req,res){
    equioCtrl.getEquipos()
    .then(function (result){
        res.json(result);
    })
}

module.exports = router;