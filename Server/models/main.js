Promise = require('bluebird');  // Se importa la biblioteca Bluebird para la manipulación de promesas.
var mysql = require('mysql');  // Se importa la biblioteca MySQL para la conexión a la base de datos.
conn_mysql = null;  // Se inicializa la variable conn_mysql como null.

var fs = require('fs');  // Se importa el módulo fs para trabajar con el sistema de archivos.

var mysql_cred = JSON.parse(fs.readFileSync(__dirname + '/cred_mysql', 'utf8'));
// Se lee el contenido del archivo 'cred_mysql' utilizando el módulo fs y se parsea como un objeto JSON.
// El archivo 'cred_mysql' debe estar en el mismo directorio que el archivo 'main.js'.

module.exports.start = function() {
  return new Promise(function(resolve, reject) {
    // Se exporta una función llamada 'start' que devuelve una promesa.
    // La promesa toma dos parámetros: resolve (para resolver la promesa) y reject (para rechazarla en caso de error).

    var p1 = new Promise(function(resolve, reject) {
      // Se crea una nueva promesa llamada p1 que envuelve la creación de la conexión a la base de datos.

      conn_mysql = mysql.createConnection(mysql_cred);
      // Se crea una conexión a la base de datos utilizando las credenciales almacenadas en mysql_cred.

      if (!conn_mysql) {
        // Si no se pudo crear la conexión, se rechaza la promesa con el error.
        reject(err);
      } else {
        conn_mysql.config.queryFormat = function (query, values) {
          // Se configura el formato de consulta de la conexión MySQL para reemplazar los valores en el formato @key en las consultas.

          if (!values) return query;
          return query.replace(/\@(\w+)/g, function (txt, key) {
            if (values.hasOwnProperty(key)) {
              return this.escape(values[key]);
            }
            return txt;
          }.bind(this));
        }
        // Se resuelve la promesa con un objeto que contiene la conexión (conn_mysql) y la biblioteca MySQL (mysql).
        resolve({ conn: conn_mysql, sql: mysql });
      }
    });

    Promise.settle([p1]).then(function(results) {
      // Se utiliza Promise.settle para esperar que se resuelva la promesa p1.
      // Una vez que se resuelve, se ejecuta la función de callback con los resultados.

      resolve({ conn: conn_mysql });
      // Se resuelve la promesa exterior con un objeto que contiene la conexión a la base de datos (conn_mysql).
    });
  });
}

  