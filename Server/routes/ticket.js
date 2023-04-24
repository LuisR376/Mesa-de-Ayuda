'use strict'
const express = require('express');
const router = express.Router();
const ticketCrtl = require ('../controllers/ticket.controller');
/***************************RUTAS BASE GET,GETBYID,UPDATE,SET********************************** */
router.get('/getticket',fnGetTicket);
router.get('/getticketByid/:id',fnGetTicketByid);

router.post('/post', setTicket);
router.post('/actualizar/:id', setTicketActualizado);
router.post('/actualizarAbierto/:id', setTicketAbierto);

router.get('/obtenCatalogEstatusTicket', catalogEstatusTicket);
/********************************************************************************************* */

/*******************************Funciones BASE GET GETBYID, UPDATE ,SET*********************** */
//

function fnGetTicket(req,res){
    ticketCrtl.fnGetTicket()
    .then(function (result){
        res.json(result);
    })
}
function setTicket(req, res) {
    let datos = req.body;
    ticketCrtl.setTicket(datos)
        .then(function (result) {
            res.json(result);
        });
}


function catalogEstatusTicket(req, res){
    ticketCrtl.catalogEstatusTicket()
    .then(function(result){
        res.json(result);
    })
}
function fnGetTicketByid(req, res){
    let idFolios = req.params.id
    console.log("id folios", idFolios);
        ticketCrtl.fnGetTicketByid({idFolios})
        .then(function(result){
        res.json(result);
    });
}

function setTicketActualizado(req, res) {
    let datos = req.body;
    ticketCrtl.setTicketActualizado(datos)
        .then(function (result) {
            res.json(result);
        });
}
function setTicketAbierto(req, res) {
    let datos = req.body;
    ticketCrtl.setTicketAbierto(datos)
        .then(function (result) {
            res.json(result);
        });
}


module.exports = router;