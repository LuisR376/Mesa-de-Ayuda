'use strict'
const express = require('express');
const router = express.Router();
const ddCrtl = require ('../controllers/discoduro.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getDd',fnGetdiscoDuro);
router.post('/post', setDiscod);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetdiscoDuro(req,res){
    ddCrtl.fnGetdiscoDuro()
    .then(function (result){
        res.json(result);
    })
}
function setDiscod(req, res) {
    let datos = req.body;
    ddCrtl.setDiscod(datos)
        .then(function (result) {
            res.json(result);
        });
}
module.exports = router;