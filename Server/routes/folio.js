'use strict'
const express = require('express');
const router = express.Router();
const FolioCtrl = require ('../controllers/folio.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/setFolio',fnSetFolio);

/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */

function fnSetFolio(req, res) {
    console.log("***************************FOLIO");
    FolioCtrl.fnSetFolio()
        .then(function (result) {
            res.json(result);
        });
}

module.exports = router;