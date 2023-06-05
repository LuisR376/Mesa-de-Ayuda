'use strict';
const express = require('express');
const router = express.Router();
const emailCrtl = require('../controllers/emailer.controller');

// Ruta para enviar el correo electrónico
router.post('/send-email', emailCrtl.sendEmail);

module.exports = router;
