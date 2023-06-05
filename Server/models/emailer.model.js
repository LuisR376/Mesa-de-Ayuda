'use strict'
const helpers = require('../modules/helpers');

function sendNotification(mailOptions, transporter) {
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error); // Error al enviar el correo
      } else {
        resolve(); // Correo enviado correctamente
      }
    });
  });
}

module.exports = {
  sendNotification: sendNotification
};

