'use strict';
const nodemailer = require('nodemailer');
module.exports = {
    enviarMail : enviarMail
}
function enviarMail(to, body, subject){
  console.log("informacion correo",to,subject)
    return new Promise (function (resolve, reject) {
      var transporter = nodemailer.createTransport({
        host: 'mail.linkbits.online',
        port: 465,
        secure: true,
        auth: {
          user: 'andres.morales@linkbits.online',
          pass: '%?_K)V2PrDy1'
        }
      });
  
      
      var message = {
        
        from: '"Tickets"<andres.morales@linkbits.online>',
        to: to,
        subject: subject,
        //attachments: [{
            // filename: 'movil-header.png',
           // path: __dirname+'/logo.png',
            // cid: 'imagest' //same cid value as in the html img src
      //  }],
        html: body 
      };
  
      transporter.sendMail(message, function(err) {
        if (!err) {
          console.log('Email enviado ');
        } else
          console.log("error al enviar correo",err);
          resolve();
      });
    });
  }

