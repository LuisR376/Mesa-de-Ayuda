'use strict'
const express = require('express');
const router = express.Router();
const fnCrtl = require ('../controllers/verificaContrasena.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.post('/post', fnverificarFn);
/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//
function fnverificarFn(req,res){
    let datos = req.body;
    console.log("router",datos);
    fnCrtl.fnverificarFn(datos)
    .then(function (result){
        res.json(result);
    })
}
module.exports = router;