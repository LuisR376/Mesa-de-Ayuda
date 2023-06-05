'use strict';
const nodemailer = require('nodemailer');
const emailModel = require('../models/emailer.model');

function sendEmail(req, res) {
    const datos = req.body;

    const transporter = nodemailer.createTransport({
        service: 'outlook',
        port: 465,
        secure: false, // En caso de que el puerto no sea seguro (TLS)
        auth: {
            user: 'andres.morales@linkbits.online',
            pass: '%?_K)V2PrDy1'
        }
        
    });

    const mailOptions = {
        from: 'andres.morales@linkbits.online',
        to: datos.to,
        subject: 'Notificación de apertura de ticket de mesa de ayuda',
        text: `Se ha abierto un nuevo ticket de mesa de ayuda con el siguiente ID: ${datos.idticket}`
    };

    emailModel.sendNotification(mailOptions, transporter)
        .then(function () {
            console.log('Correo enviado correctamente');
            res.send('Correo enviado correctamente');
        })
        .catch(function (error) {
            console.log(error);
            res.status(500).send('Error al enviar el correo');
        }
        );
}

module.exports = {
    sendEmail: sendEmail
};
