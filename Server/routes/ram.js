'use strict'
const express = require('express');
const router = express.Router();
const ramCrtl = require ('../controllers/ram.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getRam',fnGetRam);
router.post('/post', setRam);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetRam(req,res){
    ramCrtl.fnGetRam()
    .then(function (result){
        res.json(result);
    })
}
function setRam(req, res) {
    let datos = req.body;
    ramCrtl.setRam(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;