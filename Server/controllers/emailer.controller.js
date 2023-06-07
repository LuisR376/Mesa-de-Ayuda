'use strict';
const nodemailer = require('nodemailer');
const emailModel = require('../models/emailer.model');
const path = require('path');
const fs = require('fs');
function sendEmail(req, res) {
  const datos = req.body;

  const transporter = nodemailer.createTransport({
  host: 'mail.linkbits.online',
        port: 465,
        secure: true,
        auth: {
          user: 'andres.morales@linkbits.online',
          pass: '%?_K)V2PrDy1'
    }
  });
  const html = fs.readFileSync(path.resolve(__dirname, '../email/correoParaTecnico.html'), 'utf8');
  const mailOptions = {
    
    from: 'andres.morales@linkbits.online',
    to: datos.to,
    subject: 'Notificación de nuevo ticket asignado',
    text: `Se ha abierto un nuevo ticket de mesa de ayuda con el siguiente ID: ${datos.idticket}`,
    html: html
  };

  emailModel.sendNotification(mailOptions, transporter)
    .then(function () {
      console.log('Correo enviado correctamente');
      res.send('Correo enviado correctamente');
    })
    .catch(function (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    });
}

module.exports = {
  sendEmail: sendEmail
};
