'use strict';
const FolioModels = require('../models/folio.model');
const uuid = require('uuid');
module.exports = {
  fnSetFolio  // Exportar la función fnSetFolio para su uso en otros archivos
};

// Función para generar un folio de 5 dígitos irrepetible
function generarFolio() {
  let folio = "";
  const digitos = "0123456789";
  for (let i = 0; i < 5; i++) {
    folio += digitos.charAt(Math.floor(Math.random() * digitos.length));
  }
  return folio;// Devolver el folio generado
}

function fnSetFolio() {
  return new Promise(function(resolve, reject) { // Utilizar una promesa para manejar la operación asíncrona
    let folio;
    let foliosUtilizados = []; // Array para almacenar los folios utilizados

    do {
      folio = generarFolio();  // Generar un nuevo folio
    } while (folioRepetido(folio, foliosUtilizados));; // Verificar si el folio ya ha sido utilizado


    let datos = { num_folio: folio }; // Crear un objeto con el folio generado
    FolioModels.fnSetFolio(datos) // Consultando a la BD
      .then(function(result) {
        if (!result.err) {
          foliosUtilizados.push(folio); // Agregar el folio a la lista de folios utilizados
          resolve({ valido: 1, mensaje: 'Se ha creado el folio correctamente', addenda: result.result[0] });
        } else {
          reject({ valido: 0, mensaje: 'Error en crear un folio' });
        }
      });
  });
}

// Función para verificar si el folio ya ha sido utilizado previamente
function folioRepetido(folio, foliosUtilizados) {
  return foliosUtilizados.includes(folio);
}
