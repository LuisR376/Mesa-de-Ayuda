'use strict'
const express = require('express');
const router = express.Router();
const ddCrtl = require ('../controllers/discoduro.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getDd',fnGetdiscoDuro);
router.post('/post', setDd);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetdiscoDuro(req,res){
    ddCrtl.fnGetdiscoDuro()
    .then(function (result){
        res.json(result);
    })
}
function setDd(req, res) {
    let datos = req.body;
    ddCrtl.setDd(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;