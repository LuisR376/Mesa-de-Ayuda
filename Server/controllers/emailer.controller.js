'use strict';
const nodemailer = require('nodemailer');
const express = require('express');
const path = require('path');
const emailModel = require('../models/emailer.model');

module.exports = {
    sendEmail: sendEmail
};

function sendEmail(to, body, subject){
  console.log("informacion correo",to,subject)
    return new Promise (function (resolve, reject) {
      var transporter = nodemailer.createTransport({
        Server: 'smtp-mail.outlook.com',
        port: 587,
        secure: true,
        auth: {
          user: 'andres.morales@linkbits.online',
          pass: '%?_K)V2PrDy1'
        }
      });
  
      
      var message = {
        from: '"CarCon"<andres.morales@linkbits.online>',
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


